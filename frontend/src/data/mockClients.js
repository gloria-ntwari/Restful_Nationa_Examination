export const mockClients = [
  {
    id: '1',
    name: 'Umutesi Liana',
    clientSince: '02-03-2026',
    contactPerson: 'Liana',
    email: 'umuliana@gmail.com',
    phone: '0793566568',
    address: 'Muhanga, Rwanda',
    revenue: 0,
    expenses: 0,
    netProfit: 0,
    paymentRate: 0,
    paidInvoices: 0,
    totalInvoices: 0,
    expenseRecords: 0,
    invoices: [],
    expenseList: [],
  },
  {
    id: '2',
    name: 'Kigali Ventures Ltd',
    clientSince: '15-01-2026',
    contactPerson: 'Jean Pierre',
    email: 'jp@kigaliventures.rw',
    phone: '0788123456',
    address: 'Kigali, Rwanda',
    revenue: 1250000,
    expenses: 320000,
    netProfit: 930000,
    paymentRate: 75,
    paidInvoices: 3,
    totalInvoices: 4,
    expenseRecords: 2,
    invoices: [{ id: 'inv-1', title: 'Q1 Services' }],
    expenseList: [{ id: 'exp-1', title: 'Office supplies' }],
  },
]

export function getClientById(id) {
  return mockClients.find((c) => c.id === id)
}
