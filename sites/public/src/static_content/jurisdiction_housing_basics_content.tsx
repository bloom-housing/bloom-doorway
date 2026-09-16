import { t } from "@bloom-housing/ui-components"
import { Link } from "@bloom-housing/ui-seeds"
import Markdown from "markdown-to-jsx"
import { FaqCategory, FaqContent } from "../patterns/FrequentlyAskedQuestions"

export const getHousingBasicsContent = (): FaqContent => {
  const howDoIGetStarted: FaqCategory = {
    title: t("housingBasics.howDoIGetStarted"),
    faqs: [
      {
        question: t("housingBasics.howDoorwayCanHelp"),
        answer: <>{t("housingBasics.howDoorwayCanHelpResp")}</>,
      },
      {
        question: t("housingBasics.iNeedMoreHelp"),
        answer: (
          <span>
            {t("housingBasics.iNeedMoreHelpResp")}
            <Link href={"/additional-resources"}>{t("housingBasics.iNeedMoreHelpRespLink")}</Link>.
            <br />
            <br />
            {t("housingBasics.iNeedMoreHelpRespTip")}
          </span>
        ),
      },
    ],
  }

  const howFindApply: FaqCategory = {
    title: t("housingBasics.howFindApply"),
    faqs: [
      {
        question: t("housingBasics.seeDoorwayListings"),
        answer: (
          <span>
            {t("housingBasics.seeDoorwayListingsResp")}
            <span className="text__medium-weighted">{t("nav.listings")}</span>
            {t("housingBasics.seeDoorwayListingsResp1")}
          </span>
        ),
      },
      {
        question: t("housingBasics.seeListingsHousehold"),
        answer: (
          <span>
            <ol className="ml-5">
              <li>{t("housingBasics.seeListingsHouseholdResp1")}</li>
              <li>{t("housingBasics.seeListingsHouseholdResp2")}</li>
              <ul className="ml-5">
                <li>{t("housingBasics.seeListingsHouseholdResp2a")}</li>
                <li>{t("housingBasics.seeListingsHouseholdResp2b")}</li>
                <li>{t("housingBasics.seeListingsHouseholdResp2c")}</li>
                <li>{t("housingBasics.seeListingsHouseholdResp2note")}</li>
              </ul>
              <li>{t("housingBasics.seeListingsHouseholdResp3")}</li>
            </ol>
          </span>
        ),
      },
      {
        question: t("housingBasics.applyLotteryWaitlist"),
        answer: (
          <span>
            <ol className="ml-5">
              <li>{t("housingBasics.applyLotteryWaitlistResp1")}</li>
              <li>{t("housingBasics.applyLotteryWaitlistResp2")}</li>
              <li>
                {t("housingBasics.applyLotteryWaitlistResp3")}
                <ul className="ml-5">
                  <li>{t("housingBasics.applyLotteryWaitlistResp3a")}</li>
                  <li>{t("housingBasics.applyLotteryWaitlistResp3b")}</li>
                </ul>
              </li>
              <li>{t("housingBasics.applyLotteryWaitlistResp4")}</li>
              <li>{t("housingBasics.applyLotteryWaitlistResp5")}</li>
              <Markdown
                options={{
                  overrides: {
                    ul: {
                      component: ({ children, ...props }) => (
                        <ul {...props} className="ml-5">
                          {children}
                        </ul>
                      ),
                    },
                  },
                }}
              >
                {t("housingBasics.applyLotteryWaitlistResp6")}
              </Markdown>
              <li>{t("housingBasics.applyLotteryWaitlistResp7")}</li>
            </ol>
          </span>
        ),
      },
      {
        question: t("housingBasics.checkApplications"),
        answer: (
          <span>
            {t("housingBasics.checkApplicationsResp")}
            <br />
            <br />
            {t("housingBasics.checkApplicationsResp1")}
            <ul className="ml-5">
              <li>
                <Link href={"https://housing.sanjoseca.gov"}>
                  {t("housingBasics.checkApplicationsResp2")}{" "}
                </Link>
              </li>
            </ul>
          </span>
        ),
      },
    ],
  }

  return {
    categories: [howDoIGetStarted, howFindApply],
  }
}
