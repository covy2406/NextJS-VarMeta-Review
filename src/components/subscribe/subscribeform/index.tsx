'use client'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SubscribeFormType,
  SubscribeSchema,
} from "@/SchemaValidations/subcribe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { RxArrowRight } from "react-icons/rx";

const SubscribeForm = () => {
  const form = useForm<SubscribeFormType>({
    resolver: zodResolver(SubscribeSchema),
  });

  const onSubmit = async (values: SubscribeFormType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-shrink-0 max-w-xl w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email Address"
                  {...field}
                  style={{ height: "60px", border: "1px #ddd solid" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex text-white p-5 w-full rounded-md bg-hover-btn">
          <span className="mr-1 text-md font-normal btn-right">Subscribe</span>
          <RxArrowRight size={20} />
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeForm;
