import { getPlan } from '@/actions/settings'
import React from 'react'

type Props = {}

const Billing = async (props: Props) => {


  const plan = await getPlan()

  console.log(plan)

  return <div>BillingSettings</div>

  return (
    <div>Billing</div>
  )
}

export default Billing