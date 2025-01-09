import { type CardProps } from "@/interfaces";
export const Card = ({ title, content }: CardProps) => (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{content}</p>
    </div>
);
