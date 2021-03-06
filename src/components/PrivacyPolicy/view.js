import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';

export default function PrivacyPolicyView({ navigateBack }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavHead />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.sides} onPress={navigateBack}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Privacy Policy</Text>

          <View style={styles.sides} />

        </View>
        <ScrollView>

          <Text style={styles.segment}>
          Effective date: March 19, 2019
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. ("us", "we", or "our") operates the Airsity mobile application (hereinafter referred to as the "Service").
          </Text>
          <Text style={styles.segment}>
          This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </Text>
          <Text style={styles.segment}>
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
          </Text>
          <Text style={styles.subHeader}>Definitions</Text>

          <Text style={styles.segment}>Service</Text>
          <Text style={styles.segment}>
          Service is the Airsity mobile application operated by Mixdo Inc.
          </Text>

          <Text style={styles.segment}>Personal Data</Text>
          <Text style={styles.segment}>
          Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
          </Text>

          <Text style={styles.segment}>Usage Data</Text>
          <Text style={styles.segment}>
          Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
          </Text>

          <Text style={styles.segment}>Cookies</Text>
          <Text style={styles.segment}>
          Cookies are small files stored on your device (computer or mobile device).
          </Text>

          <Text style={styles.segment}>Data Controller</Text>
          <Text style={styles.segment}>
          Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.
          </Text>
          <Text style={styles.segment}>
          For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.
          </Text>

          <Text style={styles.segment}>Data Processors (or Service Providers)</Text>
          <Text style={styles.segment}>
          Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller.
          </Text>
          <Text style={styles.segment}>
          We may use the services of various Service Providers in order to process your data more effectively.
          </Text>

          <Text style={styles.segment}>Data Subject (or User)</Text>
          <Text style={styles.segment}>
          Data Subject is any living individual who is using our Service and is the subject of Personal Data.
          </Text>


          <Text style={styles.subHeader}>Information Collection and Use</Text>

          <Text style={styles.segment}>
          We collect several different types of information for various purposes to provide and improve our Service to you.
          </Text>

          <Text style={styles.subHeader}>Types of Data Collected</Text>

          <Text style={styles.segment}>
          Personal Data
          </Text>

          <Text style={styles.segment}>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: email address, first name and last name, cookies and usage data.
          </Text>

          
          <Text style={styles.segment}>
          We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or the instructions provided in any email we send.
          </Text>

          <Text style={styles.segment}>
          Usage data
          </Text>

          <Text style={styles.segment}>
          When you access the Service with a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").
          </Text>

          <Text style={styles.segment}>
          Tracking and Cookies Data
          </Text>

          <Text style={styles.segment}>
          We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
          </Text>

          <Text style={styles.segment}>
          Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.
          </Text>

          <Text style={styles.segment}>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </Text>

          <Text style={styles.segment}>
          Examples of Cookies we use:
          </Text>

          <Text style={styles.segment}>
          Session Cookies. We use Session Cookies to operate our Service.
          </Text>

          <Text style={styles.segment}>
          Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
          </Text>

          <Text style={styles.segment}>
          Security Cookies. We use Security Cookies for security purposes.
          </Text>


          <Text style={styles.subHeader}>Use of Data</Text>

          <Text style={styles.segment}>
          Mixdo Inc. uses the collected data for various purposes:
          </Text>
          <Text style={styles.segment}>
          To provide and maintain our Service
          </Text>
          <Text style={styles.segment}>
          To notify you about changes to our Service
          </Text>
          <Text style={styles.segment}>
          To allow you to participate in interactive features of our Service when you choose to do so
          </Text>
          <Text style={styles.segment}>
          To provide customer support
          </Text>
          <Text style={styles.segment}>
          To gather analysis or valuable information so that we can improve our Service
          </Text>
          <Text style={styles.segment}>
          To monitor the usage of our Service
          </Text><Text style={styles.segment}>
          To detect, prevent and address technical issues
          </Text>
          <Text style={styles.segment}>
          To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information
          </Text>


          <Text style={styles.subHeader}>Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</Text>

          <Text style={styles.segment}>
          If you are from the European Economic Area (EEA), Mixdo Inc. legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. may process your Personal Data because:
          </Text>
          <Text style={styles.segment}>
          We need to perform a contract with you
          </Text>
          <Text style={styles.segment}>
          You have given us permission to do so
          </Text>
          <Text style={styles.segment}>
          The processing is in our legitimate interests and it is not overridden by your rights
          </Text>
          <Text style={styles.segment}>
          To comply with the law
          </Text>


          <Text style={styles.subHeader}>Retention of Data</Text>
          <Text style={styles.segment}>
          Mixdo Inc. will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.
          </Text>
          

          <Text style={styles.subHeader}>Transfer of Data</Text>
          <Text style={styles.segment}>
          Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
          </Text>
          <Text style={styles.segment}>
          If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
          </Text>
          <Text style={styles.segment}>
          Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.
          </Text>


          <Text style={styles.subHeader}>Disclosure of Data</Text>
          <Text style={styles.segment}>
          Business Transaction
          </Text>
          <Text style={styles.segment}>
          If Mixdo Inc. is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
          </Text>
          <Text style={styles.segment}>
          Disclosure for Law Enforcement
          </Text>
          <Text style={styles.segment}>
          Under certain circumstances, Mixdo Inc. may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </Text>
          <Text style={styles.segment}>
          Legal Requirements
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:
          </Text>
          <Text style={styles.segment}>
          To comply with a legal obligation
          </Text>
          <Text style={styles.segment}>
          To protect and defend the rights or property of Mixdo Inc.
          </Text>
          <Text style={styles.segment}>
          To prevent or investigate possible wrongdoing in connection with the Service
          </Text>
          <Text style={styles.segment}>
          To protect the personal safety of users of the Service or the public
          </Text>
          <Text style={styles.segment}>
          To protect against legal liability
          </Text>


          <Text style={styles.subHeader}>Security of Data</Text>

          <Text style={styles.segment}>
          The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </Text>


          <Text style={styles.subHeader}>Our Policy on "Do Not Track" Signals under the California Online Protection Act (CalOPPA)</Text>

          <Text style={styles.segment}>
          We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.
          </Text>

          <Text style={styles.segment}>
          You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
          </Text>


          <Text style={styles.subHeader}>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</Text>

          <Text style={styles.segment}>
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Mixdo Inc. aims to take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.
          </Text>
          <Text style={styles.segment}>
          If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
          </Text>
          <Text style={styles.segment}>
          In certain circumstances, you have the following data protection rights:
          </Text>
          <Text style={styles.segment}>
          The right to access, update or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
          </Text>
          <Text style={styles.segment}>
          The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.
          </Text>
          <Text style={styles.segment}>
          The right to object. You have the right to object to our processing of your Personal Data.
          </Text>
          <Text style={styles.segment}>
          The right of restriction. You have the right to request that we restrict the processing of your personal information.
          </Text>
          <Text style={styles.segment}>
          The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.
          </Text>
          <Text style={styles.segment}>
          The right to withdraw consent. You also have the right to withdraw your consent at any time where Mixdo Inc. relied on your consent to process your personal information.
          </Text>
          <Text style={styles.segment}>
          Please note that we may ask you to verify your identity before responding to such requests.
          </Text>
          <Text style={styles.segment}>
          You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).
          </Text>


          <Text style={styles.subHeader}>Personal Data</Text>

          <Text style={styles.segment}>
          We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.
          </Text>
          <Text style={styles.segment}>
          These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </Text>

          <Text style={styles.segment}>
          Analytics
          </Text>
          <Text style={styles.segment}>
          We may use third-party Service Providers to monitor and analyse the use of our Service.
          </Text>
          <Text style={styles.segment}>
          Mixpanel
          </Text>
          <Text style={styles.segment}>
          Mixpanel is provided by Mixpanel Inc.
          </Text>
          <Text style={styles.segment}>
          You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: https://mixpanel.com/optout/
          </Text>
          <Text style={styles.segment}>
          For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: https://mixpanel.com/terms/
          </Text>

          <Text style={styles.subHeader}>Links to Other Sites</Text>

          <Text style={styles.segment}>
          Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </Text>
          <Text style={styles.segment}>
          We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </Text>
          

          <Text style={styles.subHeader}>Children's Privacy</Text>

          <Text style={styles.segment}>
          Our Service does not address anyone under the age of 18 ("Children").
          </Text>
          <Text style={styles.segment}>
          We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
          </Text>


          <Text style={styles.subHeader}>Changes to This Privacy Policy</Text>
          <Text style={styles.segment}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.


          </Text>
          <Text style={styles.segment}>
          We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
          </Text>
          <Text style={styles.segment}>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </Text>


          <Text style={styles.subHeader}>Contact Us</Text>
          <Text style={styles.segment}>
          If you have any questions about this Privacy Policy, please contact us:
          </Text>
          <Text style={styles.segment}>
          By email: legal@mixdo.io
          </Text>

        </ScrollView>
      </View>
    </View>
  );
}
