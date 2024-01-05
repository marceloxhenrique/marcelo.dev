"use client";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Must be a valid email.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/email", data);
      form.reset();
      toast.success(`Message was succesfuly sent!`);
    } catch (error) {
      toast.error("Something went wrong please try again later");
    }
  };

  return (
    <section
      id="CONTACT"
      className="flex w-full max-w-4xl justify-center rounded-md bg-slate-200 p-4 md:my-8 md:mt-44 md:p-14 "
    >
      <section className="max-w-xl">
        <h2 className="pb-6 text-center text-4xl font-semibold md:text-5xl ">
          CONTACT
        </h2>
        <p className="pb-6 text-lg">
          Hello there, wanna hit me up? Just fill in the form below. I will
          answer you as soon as possible.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="h-24">
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="placeholder:text-slate-400"
                      placeholder="Your name"
                    />
                  </FormControl>
                  <FormMessage className=" text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-24 ">
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="placeholder:text-slate-400"
                      placeholder="Your best email"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="h-40 ">
                  <FormLabel>Message:</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none placeholder:text-slate-400"
                      placeholder="Leave a message"
                    />
                  </FormControl>
                  <FormMessage className="h-38 text-red-500" />
                </FormItem>
              )}
            />
            <div className=" w-full md:text-right ">
              <Button
                className=" w-full bg-black px-14 text-white shadow-md md:w-0"
                type="submit"
                variant={"outline"}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </section>
  );
}
