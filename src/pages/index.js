// import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

// Import React and any other libraries or CSS files you need
import React from 'react';
import Layout from '@theme/Layout'; // Adjust this import based on your project's structure

// Define the Home component
export default function Home() {
  // Render your page content
  return (
    <Layout title="Θεατρική Ομάδα ΟΠΑ" description="Πληροφορίες για τη Θεατρική Ομάδα του Οικονομικού Πανεπιστημίου Αθηνών">
      <div>
        <h1>Θεατρική Ομάδα ΟΠΑ</h1>
        <img alt="Εργαστήρια" src="https://github.com/different-ways/theatrikiopa.eu/assets/16403754/326cb1f5-fe06-446c-9358-5481aecd9ff9" />
        <p>Τα εργαστήρια της ομάδας είναι ανοιχτά για το κοινό και διεξάγονται στο Αμφιθέατρο Αντωνιάδου κάθε Δευτέρα, Τετάρτη, Πέμπτη, και μερικές φορές στις Φοιτητικές Εστίες Αγίου Λουκά τις Παρασκευές.</p>
        <img alt="Κατάρα επί Θήβας" src="https://github.com/different-ways/theatrikiopa.eu/assets/16403754/e5f8fcbb-dce6-4835-900c-915fb225d299" />
        <p>Η προετοιμασία των παραστάσεων ξεκινά τον Ιανουάριο και η παρουσίασή τους γίνεται τον Μάιο, σε θέατρα της Αθήνας.</p>
        <h2>Βία Είναι…</h2>
        <img alt="Βία Είναι..." src="https://github.com/different-ways/theatrikiopa.eu/assets/16403754/aa60619d-adce-49af-8cba-e2951d525cb2" />
        <p>Παράσταση θέατρο ντοκουμέντο από την Θεατρική Ομάδα του Οικονομικού Πανεπιστημίου Αθηνών.</p>
        <h2>Γιοί και Κόρες του Γιάννη Καλαβριανού</h2>
        <img alt="Γιοί και Κόρες" src="https://github.com/different-ways/theatrikiopa.eu/assets/16403754/02f3ee9a-bcdd-4427-94fc-a278229ca33b" />
        <p>Μία σπονδυλωτή παράσταση για την αναζήτηση της ευτυχίας, αποτελούμενη από 15 πραγματικές ιστορίες ανθρώπων απ’ όλη την Ελλάδα.</p>
        <blockquote>Το 2023 συμπλήρωσε 44 χρόνια λειτουργίας!</blockquote>
        <p>Οι αποφάσεις για οποιοδήποτε θέμα της ομάδας λαμβάνονται συλλογικά και ισότιμα από όλα τα μέλη, που είναι κυρίως φοιτητές του Οικονομικού Πανεπιστημίου Αθηνών, αλλά και φοιτητές άλλων Πανεπιστημίων.</p>
        <img alt="Λογότυπο ΑΕΠΙ" src="https://github.com/different-ways/theatrikiopa.eu/assets/16403754/16f96542-9108-474e-a436-390e571be674" />
        <p>Εντάσσεται στη <a href="https://lesxi.aueb.gr">Φοιτητική Λέσχη</a> του ΟΠΑ και στον Πανελλήνιο Σύλλογο Ερασιτεχνικού Φοιτητικού Θεάτρου του οποίου αποτελεί ενεργό ιδρυτικό μέλος.</p>
        <p>Η Θεατρική Ομάδα του ΟΠΑ προσφέρει εργαστήρια και παραστάσεις. Συγκεκριμένα, τα εργαστήρια περιλαμβάνουν διάφορες ασκήσεις (γνωριμίας, εμπιστοσύνης, ορθοφωνίας, κίνησης και χαλάρωσης) θεατρικά παιχνίδια και αυτοσχεδιασμούς.</p>
        <p>H ομάδα καλύπτει μέρος των εργαστηρίων από παλαιότερα μέλη της. Πραγματοποιούνται, επίσης, κύκλοι εργαστηρίων συγκεκριμένης θεματικής ενότητας όπως κινησιολογία, θεατρική συγγραφή και θεωρητική προσέγγιση θεατρικών τεχνικών από εξωτερικούς συνεργάτες με μεράκι και φιλική διάθεση.</p>
        <p>Οι παραστάσεις σκηνοθετούνται κυρίως από συνεργάτες της ομάδας ενώ τα τελευταία χρόνια σκηνοθετούνται και από παλαιότερα μέλη της.</p>
        <p>Σημαντική εξέλιξη στα χρονικά της Θεατρικής Ομάδας ΟΠΑ ήταν και η διαμόρφωση ενός άρτια εξοπλισμένου χώρου στο κτήριο Βανκούβερ του ΟΠΑ σε θεατρική σκηνή, όπου η ομάδα παρουσίαζε πειραματικές δουλειές, αλλά και επίσημες παραστάσεις. Ο χώρος δεν χρησιμοποιείται πια.</p>
      </div>
    </Layout>
  );
}
