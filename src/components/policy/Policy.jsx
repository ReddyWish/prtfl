'use client'
import React, {useState} from 'react';
import styles from './style.module.scss';
import CookiesModal from "@/components/cookiesModal/CookiesModal";
import ConditionsModal from "@/components/conditionsModal/ConditionsModal";
import PrivacyModal from "@/components/privacyModal/PrivacyModal";

function Policy({ page }) {
  const [cookiesModalIsOpen, setCookiesModalIsOpen] = useState(false)
  const [conditionsModalIsOpen, setConditionsModalIsOpen] = useState(false)
  const [privacyModalIsOpen, setPrivacyModalIsOpen] = useState(false)



  return (
    <>
    <div className={styles.policyWrapper} >
      <div className={styles.policy}>
        <div className={styles.list}>
          <span className={styles.listItem} onClick={() => setPrivacyModalIsOpen(true)}>{page.home.policy.privacy}</span>
          <span>·</span>
          <span className={styles.listItem} onClick={() => setConditionsModalIsOpen(true)}>{page.home.policy.conditions}</span>
          <span>·</span>
          <span className={styles.listItem} onClick={() => setCookiesModalIsOpen(true)}>{page.home.policy.cookies}</span>
        </div>
      </div>
    </div>
    {cookiesModalIsOpen && <CookiesModal closeModal={() => setCookiesModalIsOpen(false)}/>}
    {conditionsModalIsOpen && <ConditionsModal closeModal={() => setConditionsModalIsOpen(false)}/>}
    {privacyModalIsOpen && <PrivacyModal closeModal={() => setPrivacyModalIsOpen(false)}/>}
    </>
  );
}

export default Policy;