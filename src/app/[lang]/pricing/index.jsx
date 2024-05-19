// import styles from "@/app/[lang]/about/style.module.scss";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export function Pricing({ page }) {
  let sectionTitle = `${page.home.pricing.title}.`;

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        className={styles.projects}
      >
        {sectionTitle.split("").map((item, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            {item}
          </span>
        ))}
      </motion.div>
      <div className={`${styles.item} ${styles.content}`}>
        <section className={styles.pricingSection}>
          <div className={styles.card}>
            <h3>{page.home.pricing.hourlyRate}</h3>
            <ul>
              <li>{page.home.pricing.standardHourlyRate}</li>
              <li>{page.home.pricing.hourlyMaintenance}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.websiteDevelopment}</h3>
            <ul>
              <li>{page.home.pricing.basicWebsite}</li>
              <li>{page.home.pricing.mediumWebsite}</li>
              <li>{page.home.pricing.complexWebsite}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.singlePageApplication}</h3>
            <ul>
              <li>{page.home.pricing.basicSPA}</li>
              <li>{page.home.pricing.advancedSPA}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.ecommerceSolutions}</h3>
            <ul>
              <li>{page.home.pricing.basicEcommerce}</li>
              <li>{page.home.pricing.advancedEcommerce}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.landingPages}</h3>
            <ul>
              <li>{page.home.pricing.basicLandingPage}</li>
              <li>{page.home.pricing.advancedLandingPage}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.uiUxDesign}</h3>
            <ul>
              <li>{page.home.pricing.basicUiUxDesign}</li>
              <li>{page.home.pricing.advancedUiUxDesign}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.consultationAndStrategy}</h3>
            <ul>
              <li>{page.home.pricing.initialConsultation}</li>
              <li>{page.home.pricing.strategySession}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.performanceOptimization}</h3>
            <ul>
              <li>{page.home.pricing.basicOptimization}</li>
              <li>{page.home.pricing.advancedOptimization}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.apiIntegration}</h3>
            <ul>
              <li>{page.home.pricing.basicIntegration}</li>
              <li>{page.home.pricing.complexIntegration}</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{page.home.pricing.customDevelopment}</h3>
            <ul>
              <li>{page.home.pricing.customFeatureDevelopment}</li>
              <li>{page.home.pricing.thirdPartyServiceIntegration}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
