<template>
  <div class="data-table-container">
    <!-- Controls Bar -->
    <div class="table-controls">
      <!-- Search Input -->
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search items..."
          class="search-input"
        />
      </div>

      <!-- Multiple Dropdown Filters -->
      <div v-if="filters.length > 0" class="filters-group">
        <div v-for="filter in filters" :key="filter.key" class="filter-box">
          <select
            v-model="selectedFilters[filter.key]"
            class="filter-select"
          >
            <option value="">All {{ filter.label || filter.key }}{{ filter.label?.endsWith('s')? 'e': '' }}s</option>
            <option
              v-for="option in filterOptionsMap[filter.key]"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <!-- Column Visibility Selector -->
      <div class="column-visibility-wrapper">
        <!-- <button
          type="button"
          class="btn-columns"
          @click="showColumnMenu = !showColumnMenu"
        >
          Columns <Icon icon="gear"/>
        </button> -->

        <div v-if="showColumnMenu" class="column-menu-dropdown">
          <div class="column-menu-title">Toggle Columns</div>
          <label
            v-for="col in columns"
            :key="col.key"
            class="column-checkbox-label"
          >
            <input
              type="checkbox"
              :checked="!hiddenColumnKeys.has(col.key)"
              @change="toggleColumnVisibility(col.key)"
            />
            <span>{{ col.label }}</span>
          </label>
        </div>
      </div>

      <!-- Clear All Filters Button -->
      <button
        v-if="hasActiveFilters"
        @click="clearAllFilters"
        class="btn-clear"
        type="button"
      >
        Clear Filters
      </button>
    </div>

    <!-- Table Wrapper -->
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <!-- Select All Checkbox Header -->
            <th v-if="selectable" class="checkbox-col">
              <input
                type="checkbox"
                :checked="isAllSelected"
                aria-label="Select all rows"
                @change="toggleSelectAll"
              />
            </th>

            <!-- Only Render Visible Columns -->
            <th
              v-for="col in visibleColumns"
              :key="col.key"
              @click="col.sortable !== false && sortBy(col.key)"
              :class="{ sortable: col.sortable !== false }"
            >
              <div class="th-content">
                <span>{{ col.label }}</span>
                <span v-if="col.sortable !== false" class="sort-icon">
                  <template v-if="sortKey === col.key">
                    {{ sortAsc ? '▲' : '▼' }}
                  </template>
                  <template v-else>⇅</template>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Clickable, Staggered & Selectable Rows -->
          <tr
            v-for="(item, index) in filteredAndSortedItems"
            :key="getItemKey(item, index)"
            class="table-row"
            :class="{ 'is-selected': isSelected(item, index) }"
            @click="onRowClick(item, index)"
          >
            <!-- Checkbox Cell -->
            <td v-if="selectable" class="checkbox-col" @click.stop>
              <input
                type="checkbox"
                :checked="isSelected(item, index)"
                @change="toggleSelectItem(item, index)"
              />
            </td>

            <!-- Render Only Visible Column Cells -->
            <td v-for="col in visibleColumns" :key="col.key">
              <slot :name="`cell(${col.key})`" :item="item" :value="item[col.key]">
                {{ item[col.key] }}
              </slot>
            </td>
          </tr>

          <!-- Empty State -->
          <tr v-if="filteredAndSortedItems.length === 0">
            <td :colspan="visibleColumns.length + (selectable ? 1 : 0)" class="empty-state">
              No matching records found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Icon from '../Icon.vue'

export interface Column {
  key: string
  label: string
  sortable?: boolean
  hidden?: boolean // Set to true to hide column by default
}

export interface FilterConfig {
  key: string
  label?: string
  options?: string[]
}

export type DataItem = Record<string, any>

interface Props {
  items: DataItem[]
  columns: Column[]
  filters?: FilterConfig[]
  selectable?: boolean
  itemKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  columns: () => [],
  filters: () => [],
  selectable: false,
  itemKey: 'id'
})

const emit = defineEmits<{
  (e: 'row-click', item: DataItem, index: number): void
  (e: 'selection-change', selectedItems: DataItem[]): void
}>()

// Reactive State
const searchQuery = ref<string>('')
const selectedFilters = ref<Record<string, string>>({})
const sortKey = ref<string>('')
const sortAsc = ref<boolean>(true)
const selectedItems = ref<DataItem[]>([])
const showColumnMenu = ref<boolean>(false)

// Track hidden column keys
const hiddenColumnKeys = ref<Set<string>>(new Set())

// Initialize hidden columns from props
watch(
  () => props.columns,
  (cols) => {
    const hidden = new Set<string>()
    cols.forEach(col => {
      if (col.hidden) hidden.add(col.key)
    })
    hiddenColumnKeys.value = hidden
  },
  { immediate: true, deep: true }
)

// Initialize selectedFilters with empty strings so <select> matches option value=""
watch(
  () => props.filters,
  (newFilters) => {
    const initial: Record<string, string> = {}
    newFilters.forEach(filter => {
      initial[filter.key] = selectedFilters.value[filter.key] ?? ''
    })
    selectedFilters.value = initial
  },
  { immediate: true, deep: true }
)

// Computed list of columns to display
const visibleColumns = computed<Column[]>(() => {
  return props.columns.filter(col => !hiddenColumnKeys.value.has(col.key))
})

// Toggle column visibility manually via dropdown
const toggleColumnVisibility = (key: string): void => {
  const updated = new Set(hiddenColumnKeys.value)
  if (updated.has(key)) {
    updated.delete(key)
  } else {
    updated.add(key)
  }
  hiddenColumnKeys.value = updated
}

const getItemKey = (item: DataItem, index: number): string | number => {
  return item[props.itemKey] !== undefined ? item[props.itemKey] : index
}

const isSelected = (item: DataItem, index: number): boolean => {
  const key = getItemKey(item, index)
  return selectedItems.value.some((s, i) => getItemKey(s, i) === key)
}

const toggleSelectItem = (item: DataItem, index: number): void => {
  const key = getItemKey(item, index)
  const existingIdx = selectedItems.value.findIndex((s, i) => getItemKey(s, i) === key)

  if (existingIdx > -1) {
    selectedItems.value.splice(existingIdx, 1)
  } else {
    selectedItems.value.push(item)
  }

  emit('selection-change', selectedItems.value)
}

const isAllSelected = computed<boolean>(() => {
  if (filteredAndSortedItems.value.length === 0) return false
  return filteredAndSortedItems.value.every((item, idx) => isSelected(item, idx))
})

const toggleSelectAll = (): void => {
  if (isAllSelected.value) {
    const filteredKeys = new Set(filteredAndSortedItems.value.map((item, idx) => getItemKey(item, idx)))
    selectedItems.value = selectedItems.value.filter((item, idx) => !filteredKeys.has(getItemKey(item, idx)))
  } else {
    const currentKeys = new Set(selectedItems.value.map((item, idx) => getItemKey(item, idx)))
    filteredAndSortedItems.value.forEach((item, idx) => {
      const key = getItemKey(item, idx)
      if (!currentKeys.has(key)) {
        selectedItems.value.push(item)
      }
    })
  }

  emit('selection-change', selectedItems.value)
}

const onRowClick = (item: DataItem, index: number): void => {
  emit('row-click', item, index)
}

const filterOptionsMap = computed<Record<string, string[]>>(() => {
  const map: Record<string, string[]> = {}

  props.filters.forEach(filter => {
    if (filter.options && filter.options.length > 0) {
      map[filter.key] = filter.options
    } else {
      const values = props.items
        .map(item => item[filter.key])
        .filter((val): val is string | number => val !== undefined && val !== null && val !== '')
      map[filter.key] = Array.from(new Set(values.map(String)))
    }
  })

  return map
})

const hasActiveFilters = computed<boolean>(() => {
  const hasSearch = searchQuery.value.trim().length > 0
  const hasDropdownFilter = Object.values(selectedFilters.value).some(val => Boolean(val))
  return hasSearch || hasDropdownFilter
})

const clearAllFilters = (): void => {
  searchQuery.value = ''
  Object.keys(selectedFilters.value).forEach(key => {
    selectedFilters.value[key] = ''
  })
}

const sortBy = (key: string): void => {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value
  } else {
    sortKey.value = key
    sortAsc.value = true
  }
}

const filteredAndSortedItems = computed<DataItem[]>(() => {
  let result = [...props.items]

  // Global search across all columns (including hidden ones if required)
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(item => {
      return props.columns.some(col => {
        const val = item[col.key]
        return val != null && String(val).toLowerCase().includes(query)
      })
    })
  }

  if (props.filters.length > 0) {
    result = result.filter(item => {
      return props.filters.every(filter => {
        const selectedValue = selectedFilters.value[filter.key]
        if (!selectedValue) return true
        return String(item[filter.key]) === selectedValue
      })
    })
  }

  if (sortKey.value) {
    result.sort((a, b) => {
      const valA = a[sortKey.value]
      const valB = b[sortKey.value]

      if (valA === valB) return 0
      if (valA == null) return 1
      if (valB == null) return -1

      let comparison = 0
      if (typeof valA === 'number' && typeof valB === 'number') {
        comparison = valA - valB
      } else {
        comparison = String(valA).localeCompare(String(valB))
      }

      return sortAsc.value ? comparison : -comparison
    })
  }

  return result
})
</script>

<style lang="scss" scoped>
// ==========================================
// SCSS Theme Variables
// ==========================================
$dt-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !default;
$dt-primary: #3b82f6 !default;
$dt-primary-glow: rgba(59, 130, 246, 0.2) !default;
$dt-border-color: #e5e7eb !default;
$dt-input-border: #d1d5db !default;

// Staggered Row & Header Colors
$dt-bg-header: #f8fafc !default;
$dt-bg-header-hover: #f1f5f9 !default;
$dt-bg-row-odd: #ffffff !default;
$dt-bg-row-even: #f8fafc !default;
$dt-bg-row-hover: #f1f5f9 !default;
$dt-bg-row-selected: #eff6ff !default;

$dt-btn-clear-bg: #f3f4f6 !default;
$dt-btn-clear-hover: #e5e7eb !default;
$dt-btn-clear-text: #4b5563 !default;

$dt-text-main: #334155 !default;
$dt-text-muted: #94a3b8 !default;
$dt-radius: 6px !default;
$dt-padding-cell: 0.75rem 1rem !default;
$dt-padding-input: 0.5rem 0.75rem !default;

.data-table-container {
  font-family: $dt-font-family;
  width: 100%;

  .table-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    .search-input,
    .filter-select,
    .btn-columns {
      padding: $dt-padding-input;
      border: 1px solid $dt-input-border;
      border-radius: $dt-radius;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      background-color: #ffffff;

      &:focus {
        border-color: $dt-primary;
        box-shadow: 0 0 0 2px $dt-primary-glow;
      }
    }

    .filters-group {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    // Column Visibility Popover
    .column-visibility-wrapper {
      position: relative;

      .btn-columns {
        cursor: pointer;
        color: $dt-text-main;
        &:hover {
          background-color: $dt-bg-header-hover;
        }
      }

      .column-menu-dropdown {
        position: absolute;
        top: calc(100% + 0.25rem);
        right: 0;
        z-index: 10;
        background-color: #ffffff;
        border: 1px solid $dt-border-color;
        border-radius: $dt-radius;
        padding: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        min-width: 160px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .column-menu-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: $dt-text-muted;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .column-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: $dt-text-main;
          cursor: pointer;

          input[type="checkbox"] {
            accent-color: $dt-primary;
          }
        }
      }
    }

    .btn-clear {
      padding: $dt-padding-input;
      background-color: $dt-btn-clear-bg;
      color: $dt-btn-clear-text;
      border: 1px solid $dt-input-border;
      border-radius: $dt-radius;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: $dt-btn-clear-hover;
      }
    }
  }

  .table-wrapper {
    overflow-x: auto;
    border: 1px solid $dt-border-color;
    border-radius: $dt-radius;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th, td {
      padding: $dt-padding-cell;
      border-bottom: 1px solid $dt-border-color;
    }

    .checkbox-col {
      width: 40px;
      text-align: center;
      padding-left: 0.75rem;
      padding-right: 0.75rem;

      input[type="checkbox"] {
        cursor: pointer;
        width: 16px;
        height: 16px;
        accent-color: $dt-primary;
      }
    }

    th {
      background-color: $dt-bg-header;
      font-weight: 600;
      color: $dt-text-main;

      &.sortable {
        cursor: pointer;
        user-select: none;

        &:hover {
          background-color: $dt-bg-header-hover;
        }
      }

      .th-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        .sort-icon {
          font-size: 0.75rem;
          color: $dt-text-muted;
        }
      }
    }

    tbody {
      .table-row {
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;

        &:nth-child(odd) {
          background-color: $dt-bg-row-odd;
        }

        &:nth-child(even) {
          background-color: $dt-bg-row-even;
        }

        &:hover {
          background-color: $dt-bg-row-hover;
        }

        &.is-selected {
          background-color: $dt-bg-row-selected;
        }
      }

      .empty-state {
        text-align: center;
        color: $dt-text-muted;
        padding: 2rem;
        background-color: $dt-bg-row-odd;
      }
    }
  }
}
</style>