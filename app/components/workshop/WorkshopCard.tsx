import { Workshop } from '@/app/types';
import { cn, formatDate, formatPrice } from '@/app/lib/utils';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface WorkshopCardProps {
  workshop: Workshop;
  className?: string;
}

export function WorkshopCard({ workshop, className }: WorkshopCardProps): JSX.Element {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="relative w-full h-[200px]">
        <Image
          src={workshop.imageUrl}
          alt={workshop.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{workshop.title}</CardTitle>
        <CardDescription>{formatDate(workshop.date)} | {workshop.location}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{workshop.description}</p>
        <div className="flex flex-col space-y-1">
          <p className="text-sm">Instructor: {workshop.instructor}</p>
          <p className="text-sm">Price: {formatPrice(workshop.price)}</p>
          <p className="text-sm">Capacity: {workshop.capacity} participants</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
