'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	category: z.string().max(50),
});
export default function Search({ className }: { className?: string }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			category: '',
		},
	});
	const router = useRouter();

	const onSubmit = () => {
		if (form.getValues('category'))
			router.push(`/results/${form.getValues('category')}`);
		form.reset();
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={`${className} space-y-8`}>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Search...'
										{...field}
										className='p-2 text-primary bg-transparent w-[260px] sm:w-80  rounded-lg'
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</>
	);
}
