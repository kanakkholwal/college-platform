
import mongoose from 'mongoose';
import * as z from 'zod';

export const rawPollSchema = z.object({
    question: z.string(),
    description: z.string().optional(),
    options: z.array(z.string()),
    multipleChoice: z.boolean().default(false),
    votes: z.array(z.string()),
    closesAt: z.date().default(() => new Date(Date.now() + 6 * 60 * 60 * 1000)), // Default to 6 hours from now
});

export type RawPollType = z.infer<typeof rawPollSchema>;



const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    description: { type: String },
    options: [{ type: String, required: true }],
    multipleChoice: { type: Boolean, default: false },
    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    closesAt: { type: Date, required: true, default: () => new Date(Date.now() + 6 * 60 * 60 * 1000) }, // Default to 6 hours from now
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Poll || mongoose.model('Poll', pollSchema);
