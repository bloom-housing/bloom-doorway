import { PartnerFooterProps } from "../components/core/PartnerFooter"

export const getJurisdictionFooterLinksContent = (): PartnerFooterProps => {
  return {
    links: [
      {
        text: "Doorway Partners Manual",
        href: "https://docs.google.com/document/d/1W4tIMtUMwz4KqdcO5f4yZi0R5AU74P3B/edit",
      },
      {
        text: "Privacy Policy",
        href: "https://mtc.ca.gov/doorway-housing-portal-privacy-policy",
      },
      {
        text: "Terms of Use",
        href: "https://mtc.ca.gov/doorway-housing-portal-terms-use",
      },
    ],
    includeExygyFooter: false,
  }
}
