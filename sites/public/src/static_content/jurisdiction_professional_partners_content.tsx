import { t } from "@bloom-housing/ui-components"
import Markdown from "markdown-to-jsx"
import { ContactCardProps } from "../components/shared/ContactCard"
import { FaqCategory, FaqContent } from "../patterns/FrequentlyAskedQuestions"

export const getProfessionalPartnersContent = (): FaqContent => {
  const email = t("resources.contactEmail")

  const whatIsHousingPortal: FaqCategory = {
    title: t("professionalPartners.dev.whatIsTheDoorway"),
    faqs: [
      {
        question: t("professionalPartners.dev.whatIsTheDoorway"),
        answer: (
          <>
            <span>{t("professionalPartners.dev.whatIsTheDoorwayResp1")}</span>
            <br />
            <br />
            <span>{t("professionalPartners.dev.whatIsTheDoorwayResp2")}</span>
            <a href="https://partners.housingbayarea.mtc.ca.gov">
              {t("professionalPartners.dev.whatIsTheDoorwayResp3")}
            </a>
          </>
        ),
      },
      {
        question: t("professionalPartners.dev.whyDoWeNeedDoorway"),
        answer: <>{t("professionalPartners.dev.whyDoWeNeedDoorwayResp")}</>,
      },
    ],
  }
  const whatIsTheRole: FaqCategory = {
    title: t("professionalPartners.dev.whatIsTheRoleOfDevelopers"),
    faqs: [
      {
        question: t("professionalPartners.dev.whatIsTheRoleOfDevelopers"),
        answer: (
          <span>
            {t("professionalPartners.dev.whatIsTheRoleOfDevelopersResp1")}
            <a href={`mailto:${t("professionalPartners.doorwayEmail")}`}>
              {t("professionalPartners.dev.whatIsTheRoleOfDevelopersResp2")}
            </a>
          </span>
        ),
      },
      {
        question: t("professionalPartners.dev.whatAreTheBenefitsOfDevelopers"),
        answer: (
          <ul>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp1")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp2")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp3")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp4")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp5")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp6")}</li>
            <li>{t("professionalPartners.dev.whatAreTheBenefitsOfDevelopersResp7")}</li>
          </ul>
        ),
      },
    ],
  }
  const howDoesListingWork: FaqCategory = {
    title: t("professionalPartners.dev.howDoesListingWork"),
    faqs: [
      {
        question: t("professionalPartners.dev.whatKindOfProperties"),
        answer: <>{t("professionalPartners.dev.whatKindOfPropertiesResp")}</>,
      },
      {
        question: t("professionalPartners.dev.howDoWeListProperty"),
        answer: (
          <>
            {t("professionalPartners.dev.howDoWeListPropertyResp1")}
            <ul>
              <li>
                {t("professionalPartners.dev.howDoWeListPropertyResp2a")}
                <a href="https://partners.housingbayarea.mtc.ca.gov">
                  {t("professionalPartners.dev.howDoWeListPropertyResp2b")}
                </a>
              </li>
              <li>
                {t("professionalPartners.dev.howDoWeListPropertyResp3a")}
                <a href={`mailto:${t("professionalPartners.doorwayEmail")}`}>
                  {t("professionalPartners.doorwayEmail")}
                </a>
                {t("professionalPartners.dev.howDoWeListPropertyResp3b")}
              </li>
              <li>
                {t("professionalPartners.dev.howDoWeListPropertyResp4")}
                <ul>
                  <li>
                    {t("professionalPartners.dev.howDoWeListPropertyResp4a1")}
                    <a href={`mailto:${t("professionalPartners.doorwayEmail")}`}>
                      {t("professionalPartners.doorwayEmail")}
                    </a>
                    {t("professionalPartners.dev.howDoWeListPropertyResp4a2")}
                    <ul>
                      <li>{t("professionalPartners.dev.howDoWeListPropertyResp4aInfo")}</li>
                    </ul>
                  </li>
                  <li>{t("professionalPartners.dev.howDoWeListPropertyResp4b")}</li>
                  <li>{t("professionalPartners.dev.howDoWeListPropertyResp4c")}</li>
                  <li>
                    {t("professionalPartners.dev.howDoWeListPropertyResp4d1")}
                    <a href={`mailto:${t("professionalPartners.doorwayEmail")}`}>
                      {t("professionalPartners.doorwayEmail")}
                    </a>
                    {t("professionalPartners.dev.howDoWeListPropertyResp4d2")}
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        question: t("professionalPartners.dev.whatIfIHaveAnAccount"),
        answer: (
          <>
            {" "}
            {t("professionalPartners.dev.whatIfIHaveAnAccountResp1")}
            <ul>
              <li>
                {t("professionalPartners.dev.whatIfIHaveAnAccountResp2a")}
                <a href={`mailto:${t("professionalPartners.partnersEmail")}`}>
                  {t("professionalPartners.partnersEmail")}
                </a>
                {t("professionalPartners.dev.whatIfIHaveAnAccountResp2b")}
              </li>
            </ul>
          </>
        ),
      },
      {
        question: t("professionalPartners.dev.howCanWeGetInvolved"),
        answer: (
          <>
            {" "}
            {t("professionalPartners.dev.howCanWeGetInvolvedResp1a")}
            <a href={`mailto:${t("professionalPartners.doorwayEmail")}`}>
              {t("professionalPartners.dev.howCanWeGetInvolvedResp1b")}
            </a>
          </>
        ),
      },
    ],
  }
  const jurisdictions: FaqCategory = {
    title: t("professionalPartners.jurisdictions"),
    faqs: [
      {
        question: t("professionalPartners.jurisdictions.whatIsTheRole"),
        answer: (
          <span>
            {t("professionalPartners.jurisdictions.whatIsTheRoleResp1")}
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        ),
      },
      {
        question: t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictions"),
        answer: (
          <ul>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp1")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp2")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp3")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp4")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp5")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp6")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp7")}</li>
            <li>{t("professionalPartners.jurisdictions.benefitsOfLocalJurisdictionsResp8")}</li>
          </ul>
        ),
      },
      {
        question: t("professionalPartners.jurisdictions.howCanWeGetInvolved"),
        answer: (
          <span>
            {t("professionalPartners.jurisdictions.howCanWeGetInvolvedResp1")}
            <a href={`mailto:${email}`}>{email}</a>
            {t("professionalPartners.jurisdictions.howCanWeGetInvolvedResp2")}
          </span>
        ),
      },
    ],
  }

  return {
    categories: [whatIsHousingPortal, whatIsTheRole, howDoesListingWork, jurisdictions],
  }
}

export const getProfessionalPartnersContactContent = (): ContactCardProps => {
  const contactDescription = t("professionalPartners.contactDescription")
  const email = t("resources.contactEmail")
  const heading = t("footer.contact")

  return {
    address: undefined,
    contactDescription: contactDescription,
    contactInfo: undefined,
    email: email,
    heading: heading,
    hours: undefined,
    phone: undefined,
  }
}
