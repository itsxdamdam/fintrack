import React from 'react'
import Summary from './Summary'
import TransactionsTable from './TransactionTable'
import { transactionsData } from '@/app/data'

const OverviewTab = () => {
  return (
    <section className="w-full">
      <Summary />
      <TransactionsTable transactions={transactionsData}/>
    </section>
  )
}

export default OverviewTab