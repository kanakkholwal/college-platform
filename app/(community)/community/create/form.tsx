"use client";
import { FancyArea } from "@/components/common/fancy-area";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createPost } from "src/lib/community/actions";
import { CATEGORY_TYPES, rawCommunityPostSchema,SUB_CATEGORY_TYPES } from "src/models/community";
import { z } from "zod";

export default function CreateCommunityPost() {
    const form = useForm<z.infer<typeof rawCommunityPostSchema>>({
        resolver: zodResolver(rawCommunityPostSchema),
        defaultValues: {
            title: '',
            content: '',
            category: CATEGORY_TYPES[0],
            subCategory: SUB_CATEGORY_TYPES[0],
        },
    })

    function onSubmit(values: z.infer<typeof rawCommunityPostSchema>) {
        console.log(values);
        toast.promise(createPost(values), {
            loading: 'Creating Post',
            success: (data:any)=>{
                form.reset({
                    title: '',
                    content: '',
                    category: CATEGORY_TYPES[0],
                    subCategory: SUB_CATEGORY_TYPES[0],
                });
                return 'Post Created';
            },
            error: 'Failed to create Post'
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="title" {...field} disabled={form.formState.isSubmitting}/>
                            </FormControl>
                            <FormDescription>
                                A short title for the post.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <FancyArea
                                    disabled={form.formState.isSubmitting}
                                    textValue={field.value}
                                    setTextValue={(value) => {
                                        field.onChange(value)
                                    }}
                                    {...field} 
                                />
                            </FormControl>
                            <FormDescription>
                                The content of the post.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={form.formState.isSubmitting} >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {CATEGORY_TYPES.map((type) => {
                                        return <SelectItem key={type} value={type}>{type}</SelectItem>
                                    })}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                The category of the post.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.watch('category').toLowerCase() === 'academics' && (<>
                
                    <FormField
                    control={form.control}
                    name="subCategory"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sub Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field?.value || undefined} disabled={form.formState.isSubmitting} >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Sub category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {SUB_CATEGORY_TYPES.map((type) => {
                                        return <SelectItem key={type} value={type}>{type}</SelectItem>
                                    })}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                The category of the post.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </>)}
                <Button type="submit" width="md" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Publishing...' : 'Publish Post'}
                </Button>
            </form>
        </Form>
    )
}   