"use client";

import * as Contentful from "contentful";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

interface Social {
  name: Contentful.EntryFields.Text;
  value: Contentful.EntryFields.Text;
}

interface Props {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  socials: Contentful.Entry<Social>[];
}

const initialFormValues = {
  name: "",
  message: "",
};

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function Contact({ title, description, socials }: Props) {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    if (!formValues.name.trim().length || !formValues.message.trim().length) {
      return setError("Fill the form first!");
    }

    flushSync(() => {
      setSending(true);
      setError("");
    });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        (result) => {
          setSending(false);
          setFormValues(initialFormValues);
          setError("Message sent.");
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <div className="flex flex-col-reverse gap-5 lg:flex-row">
        <form
          ref={formRef}
          className="grid w-full justify-items-start gap-5 sm:w-[300px]"
        >
          <Input
            value={formValues.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Name"
          />
          <Textarea
            value={formValues.message}
            onChange={handleInputChange}
            name="message"
            placeholder="Message"
            rows={6}
          />
          <div className="flex items-center gap-5">
            <Button disabled={sending} onClick={sendEmail}>
              Send
            </Button>
            {error && <Paragraph>{error}</Paragraph>}
            {sending && <Paragraph>Sending...</Paragraph>}
          </div>
        </form>
        <ul>
          {socials.map((social) => (
            <li key={social.sys.id}>
              <Paragraph>
                {social.fields.name}: {social.fields.value}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
