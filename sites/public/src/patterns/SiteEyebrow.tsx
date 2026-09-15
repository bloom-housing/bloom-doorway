import React, { useEffect, useState } from "react"
import { tIfExists } from "@bloom-housing/shared-helpers"
import { t } from "@bloom-housing/ui-components"
import { Link } from "@bloom-housing/ui-seeds"
import styles from "./SiteHeader.module.scss"
import MaxWidthLayout from "../layouts/max-width"
import {
  getJurisdictionEyebrowImageContent,
  LogoContent,
} from "../static_content/jurisdiction_eyebrow_image"

export const SiteEyebrow = () => {
  // Translation lookups below can differ between the server-rendered markup and the client's
  // first render, which trips React's hydration mismatch (#418)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const imageContent: LogoContent | null = getJurisdictionEyebrowImageContent()

  if (tIfExists("nav.eyebrow.text") || tIfExists("nav.eyebrow.url") || imageContent.logoSrc) {
    return (
      <MaxWidthLayout className={styles["eyebrow-wrapper"]}>
        <div className={styles["eyebrow-container"]}>
          {imageContent.logoSrc && (
            <a href={imageContent.logoUrl || "/"} className={styles["logo"]}>
              <img
                src={imageContent.logoSrc}
                alt={imageContent.logoAltText || "Jurisdiction logo"}
              />
            </a>
          )}

          {(tIfExists("nav.eyebrow.text") || tIfExists("nav.eyebrow.url")) && (
            <div className={styles["content-container"]}>
              {tIfExists("nav.eyebrow.text") && t("nav.eyebrow.text")}
              {tIfExists("nav.eyebrow.url") && (
                <Link className={styles["eyebrow-link"]} href={t("nav.eyebrow.url")}>
                  {tIfExists("nav.eyebrow.link") ? t("nav.eyebrow.link") : t("nav.eyebrow.url")}
                </Link>
              )}
            </div>
          )}
        </div>
      </MaxWidthLayout>
    )
  } else return null
}
