"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const privacyPolicies = [
  {
    title: "Introduction",
    body: "Thank you for using PurrTalk. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and manage your information when you use the App.",
  },
  {
    title: "Personal Data",
    body: "PurrTalk doesn't collect or share any type of personal data.",
  },
  {
    title: "Changes to Privacy Policy",
    body: "Please note that this Privacy Policy may be subject to change. Any changes will be reflected in this document, and your continued use of the App after any modifications indicates your acceptance of the updated Privacy Policy.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about the Privacy Policy you can contact us through the form below.",
  },
];

const schema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty." }),
  email: z.string().min(1, { message: "Email cannot be empty." }),
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <main className="flex min-h-screen flex-col gap-y-16 items-center px-4 py-12 md:py-24 max-w-[700px] mx-auto">
      <div className="flex items-center gap-x-2">
        <img src="icon.png" alt="" className="w-12 rounded-lg" />
        <h1 className="text-2xl font-semibold">PurrTalk Support Page</h1>
      </div>
      <div className="flex flex-col gap-y-8">
        <h2 className="text-center text-xl font-semibold">Privacy Policy</h2>
        {privacyPolicies.map((privacyPolicy, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold">
              {i + 1}. {privacyPolicy.title}
            </h3>
            <hr className="border-t-4 border-primary-700 mb-2" />
            <p>{privacyPolicy.body}</p>
          </div>
        ))}
      </div>

      <Form {...form}>
        <form action="https://getform.io/f/nbdeeeya" method="POST" className="mx-auto w-full flex flex-col gap-y-4">
          <h2 className="text-center text-xl font-semibold">Contact Us</h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className={fieldState.invalid ? "border-error-900" : ""} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className={fieldState.invalid ? "border-error-900" : ""} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea className={fieldState.invalid ? "border-error-900" : ""} {...field}></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!form.formState.isValid}>
            Send
          </Button>
        </form>
      </Form>
    </main>
  );
}
