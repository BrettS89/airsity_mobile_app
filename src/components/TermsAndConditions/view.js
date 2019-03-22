import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';

export default function TermsAndConditionsView({ navigateBack }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavHead />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.sides} onPress={navigateBack}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Terms and conditions</Text>
          <View style={styles.sides} />
        </View>
        <ScrollView>
          <Text style={styles.segment}>
          Last updated: March 19, 2019
          </Text>
          <Text style={styles.segment}>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Airsity mobile application (the "Service") operated by Mixdo Inc. ("us", "we", or "our").
          </Text>
          <Text style={styles.segment}>
          Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</Text>
          <Text style={styles.segment}>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</Text>
          <Text style={styles.subHeader}>Accounts</Text>
          <Text style={styles.segment}>
            Service is the Mixdo mobile application operated by Mixdo Inc.
          </Text>
          <Text style={styles.subHeader}>Personal Data</Text>
          <Text style={styles.segment}>
          When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</Text>
          <Text style={styles.segment}>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</Text>
          <Text style={styles.subHeader}>Intellectual Property</Text>
          <Text style={styles.segment}>
          The Service and its original content, features and functionality are and will remain the exclusive property of Mixdo Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Mixdo Inc..</Text>
          <Text style={styles.subHeader}>Links To Other Web Sites</Text>
          <Text style={styles.segment}>
          Our Service may contain links to third party web sites or services that are not owned or controlled by Mixdo Inc.
          </Text>
          <Text style={styles.segment}>Mixdo Inc. has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</Text>
          <Text style={styles.segment}>You acknowledge and agree that Mixdo Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.</Text>
          <Text style={styles.segment}>We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.</Text>
          <Text style={styles.subHeader}>Termination</Text>
          <Text style={styles.segment}>
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</Text>
          <Text style={styles.segment}>
          If you wish to terminate your account, you may simply discontinue using the Service.
          </Text>
          <Text style={styles.segment}>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</Text>
          <Text style={styles.subHeader}>Indemnification</Text>
          <Text style={styles.segment}>
          You agree to defend, indemnify and hold harmless Mixdo Inc. and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
          </Text>
          <Text style={styles.subHeader}>Limitation Of Liability</Text>
          <Text style={styles.segment}>
          In no event shall Mixdo Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </Text>
          <Text style={styles.subHeader}>Disclaimer</Text>
          <Text style={styles.segment}>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </Text>
          <Text style={styles.segment}>
          Mixdo Inc. its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          </Text>
          <Text style={styles.subHeader}>Exclusions</Text>
          <Text style={styles.segment}>
          Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
          </Text>
          <Text style={styles.subHeader}>
          Governing Law
          </Text>
          <Text style={styles.segment}>
          These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
          </Text>
          <Text style={styles.segment}>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.          </Text>
          <Text style={styles.subHeader}>
          Changes
          </Text>
          <Text style={styles.segment}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </Text>
          <Text style={styles.segment}>
          By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.          </Text>
          <Text style={styles.subHeader}>
          Contact Us
          </Text>
          <Text style={styles.segment}>
          If you have any questions about these Terms, please contact us.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
