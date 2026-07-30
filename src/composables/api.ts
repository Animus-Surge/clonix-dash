// API connection
// Hooks into stores for caching

// API Calls
export const getDevicesList = async (sortBy: string, filterBy: string = '', filter='', count: number = 25, pageOffset: number = 0) => {
  // GET /api/v1/devices?sort=<sortBy>&filterkey=<filterBy>&filter=<filter>&count=<count>&offset=<pageOffset>

  // sortBy: One of key names: 'SerialNumber', 'Hostname', 'Unit', 'ProvisionDate', 'LastCheckIn'
  // filterBy: One of key names: 'SerialNumber', 'Hostname', 'Unit', 'ProvisionDate', 'LastCheckIn'
  // filter: String. Used by filterBy to match regex
  // count: How many entries to return
  // pageOffset: Pagination. Actual offset calculated by (pageOffset+1)*count

  try {
    const resp = await fetch('');
  } catch (error) {
    console.error("Request `getDevicesList` failed.", error)
  }
}

export const getDeviceInfo = async (deviceId: string, metrics = true) => {
  // GET /api/v1/devices/<deviceId>?gathermetrics=<metrics>
}

export const createNewDevice = async (deviceId: string) => {
  // POST /api/v1/devices/<deviceId>
}