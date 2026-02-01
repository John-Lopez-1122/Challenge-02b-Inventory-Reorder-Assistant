// Variables
let itemName = "USB-C Cable"
let unitCost = 4.50
let currentStock = 243
let reorderLevel = 150
let targetStock = 400
let weeklyDemand = 150
let supplierLeadTimesWeeks = 2

// Calculate metrics
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0,targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimesWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimesWeeks

// END: console test