import React from "react"
import { CreditCard } from "@medusajs/icons"

import Ideal from "@modules/common/icons/ideal"
import Bancontact from "@modules/common/icons/bancontact"
import PayPal from "@modules/common/icons/paypal"

/* Map of payment provider_id to their title and icon. Add in any payment providers you want to use. */
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.JSX.Element }
> = {
  pp_stripe_stripe: {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "pp_medusa-payments_default": {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "pp_stripe-ideal_stripe": {
    title: "iDeal",
    icon: <Ideal />,
  },
  "pp_stripe-bancontact_stripe": {
    title: "Bancontact",
    icon: <Bancontact />,
  },
  pp_paypal_paypal: {
    title: "PayPal",
    icon: <PayPal />,
  },
  pp_system_default: {
    title: "Manual Payment",
    icon: <CreditCard />,
  },
  // Stripe Extended providers - various possible ID formats
  "pp_stripe-extended_stripe-card": {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "pp_stripe-extended_stripe-extended": {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "pp_stripe-extended_stripe-klarna": {
    title: "Klarna",
    icon: <CreditCard />,
  },
  "pp_stripe-extended_stripe-paypal": {
    title: "PayPal",
    icon: <PayPal />,
  },
  // Additional possible formats
  "pp_stripe-extended_stripe-card_stripe-extended": {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "pp_stripe-extended_stripe-klarna_stripe-extended": {
    title: "Klarna",
    icon: <CreditCard />,
  },
  "pp_stripe-extended_stripe-paypal_stripe-extended": {
    title: "PayPal",
    icon: <PayPal />,
  },
  // Add more payment providers here
}

// This only checks if it is native stripe or medusa payments for card payments, it ignores the other stripe-based providers
export const isStripeLike = (providerId?: string) => {
  if (!providerId) return false
  // Regular Stripe and Medusa Payments
  if (providerId.startsWith("pp_stripe_") || providerId.startsWith("pp_medusa-")) {
    return true
  }
  // Stripe Extended - only card payments need card input
  if (providerId.startsWith("pp_stripe-extended_")) {
    // Only card payments need Stripe card input, not Klarna or PayPal
    return (
      providerId.includes("stripe-card") || 
      providerId.includes("stripe-extended") ||
      (!providerId.includes("klarna") && !providerId.includes("paypal"))
    )
  }
  return false
}

export const isPaypal = (providerId?: string) => {
  return (
    providerId?.startsWith("pp_paypal") ||
    providerId?.includes("stripe-paypal")
  )
}
export const isManual = (providerId?: string) => {
  return providerId?.startsWith("pp_system_default")
}

// Add currencies that don't need to be divided by 100
export const noDivisionCurrencies = [
  "krw",
  "jpy",
  "vnd",
  "clp",
  "pyg",
  "xaf",
  "xof",
  "bif",
  "djf",
  "gnf",
  "kmf",
  "mga",
  "rwf",
  "xpf",
  "htg",
  "vuv",
  "xag",
  "xdr",
  "xau",
]
