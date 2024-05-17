"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useRefWithFocus } from "@/hooks/useRefWithFocus";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createPoll } from "src/lib/poll/actions";
import { useMediaQuery } from "usehooks-ts";
import * as z from 'zod';




export const rawPollSchema = z.object({
    question: z.string(),
    description: z.string().optional(),
    options: z.array(z.string().min(1, 'Option cannot be empty')).min(2, 'At least two options are required'),
    multipleChoice: z.boolean().default(false),
    votes: z.array(z.string()).default([]),
    closesAt: z.date().default(() => new Date(Date.now() + 6 * 60 * 60 * 1000)), // Default to 6 hours from now
});



export default function CreatePoll() {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Create New Poll</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Poll</DialogTitle>
                        <DialogDescription>
                            Create a new poll here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <PollForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Create New Poll</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Create New Poll</DrawerTitle>
                    <DrawerDescription>
                        Create a new poll here. Click save when you're done.
                    </DrawerDescription>
                </DrawerHeader>
                <PollForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}



function PollForm({ className }: { className?: string }) {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof rawPollSchema>>({
        resolver: zodResolver(rawPollSchema),
        defaultValues: {
            question: "",
            description: "",
            options: ["", ""],
            multipleChoice: false,
        },
    });

    async function onSubmit(values: z.infer<typeof rawPollSchema>) {
        console.log('Form submitted with values:', values);    
        setLoading(true);
        toast.promise(createPoll(values), {
            loading: "Creating poll...",
            success: "Poll created successfully",
            error: "Failed to create poll",
        }).finally(() => setLoading(false))

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("grid items-start gap-4", className)}>
                <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Question</FormLabel>
                            <FormControl>
                                <Input placeholder="Who is most popular person?" disabled={form.formState.isSubmitting} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Who will be the winner?" disabled={form.formState.isSubmitting} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="options"
                    render={() => (
                        <FormItem>
                            <div className="flex items-center space-x-2 justify-between">
                                <FormLabel className="mb-0">Options</FormLabel>
                                <Button size="sm" type="button" variant="default_light" onClick={() => {
                                    form.setValue("options", [...form.getValues("options"), ""])
                                }}>Add Option</Button>
                            </div>
                            <FormDescription>
                                Add the options for the poll
                            </FormDescription>
                            {form.getValues("options").map((item, index) => (
                                <FormField
                                    key={item + "_" + index}
                                    control={form.control}
                                    name={`options.${index}`}
                                    render={({ field }) => {
                                        const inputRef = useRefWithFocus<HTMLInputElement>();
                                        const { ref, ...rest } = field; // Destructure ref from field

                                        useEffect(() => {
                                            inputRef.current?.focus();
                                        }, [item]);
                                        return (
                                            <FormItem
                                                key={item}
                                                className="flex flex-row space-x-3 space-y-0"
                                            >
                                                <FormLabel className="size-8 rounded-md p-3 inline-flex justify-center items-center mb-0">
                                                    {index + 1}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        ref={inputRef}
                                                        placeholder={`Enter Option ${index + 1}`}
                                                        {...rest}
                                                        disabled={form.formState.isSubmitting}
                                                        onChange={(event) => {
                                                            const newOptions = [...form.getValues("options")];
                                                            newOptions[index] = event.target.value;
                                                            form.setValue("options", newOptions);
                                                        }}
                                                    />
                                                </FormControl>
                                                <Button type="button" size="icon" variant="default_light" onClick={() => {
                                                    const newOptions = form
                                                        .getValues("options")
                                                        .filter((_, i) => i !== index);
                                                    form.setValue("options", newOptions);
                                                }}>
                                                    -
                                                </Button>
                                                <FormMessage />

                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="multipleChoice"
                    render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 justify-between">
                            <FormLabel className="mb-0">Multiple Choice</FormLabel>
                            <FormControl>
                                <Switch checked={field.value}
                                    onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}
                // onClick={() => form.handleSubmit(onSubmit)()}
                >
                    {loading ? "Creating Poll..." : "Create Poll"}
                </Button>
            </form>
        </Form>
    )
}
