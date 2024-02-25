"use client";
import Container from "../Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(500),
});
const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col items-center  justify-between gap-6  md:flex-row">
          <div className="flex-1">
            <h3 className="font-montserrat flex items-center gap-3  text-3xl font-bold ">
              <span className="text-rose-500">JOIN NOW</span>
              TO GET IN SHAPE
            </h3>
            <p className="my-5">
              Congue adipiscing risus commodo placerat. Tellus et in feugiat
              nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
              adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>

            <div className="max-w-md">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
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
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant="warning" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex-1">
            <img src="/ContactUsPageGraphic.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
