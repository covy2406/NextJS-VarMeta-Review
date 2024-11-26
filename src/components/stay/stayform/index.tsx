"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

import {
  MessageSchema,
  MessageSchemaType,
} from "@/SchemaValidations/message.schema";
import { useForm } from "react-hook-form";
import { RxArrowRight } from "react-icons/rx";

export function StayForm() {
  const form = useForm<MessageSchemaType>({
    resolver: zodResolver(MessageSchema),
  });

  const onSubmit = async (values: MessageSchemaType) => {
    console.log(values);
    toast({ description: "Form submitted successfully" });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-shrink-0 max-w-xl w-full p-6 "
      >
        {/* <h1 className="uppercase text-center">Login Form</h1> */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  style={{ height: "60px", border: "1px #ddd solid" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  style={{ height: "60px", border: "1px #ddd solid" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Subject"
                  {...field}
                  style={{ height: "60px", border: "1px #ddd solid" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Message"
                  {...field}
                  style={{ height: "100px", border: "1px #ddd sold" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className="flex xs:px-2 xs:py-1 md:py-2 md:px-3 bg-hover-btn text-white hover:text-white text-center items-center py-5 px-[2.125rem] border border-solid rounded-full border-primary-color">
          <span className="mr-1 text-lg font-medium btn-right">Submit message</span>
          <RxArrowRight size={28} />
        </button>
      </form>
    </Form>
  );
}
