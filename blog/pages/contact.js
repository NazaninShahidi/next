import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>contact Me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
