import { cn } from '@/lib/utils';
import { getStatusVariant } from '@/lib/utils';

interface StatusChipProps {
  status: string;
}

export default function StatusChip({ status }: StatusChipProps) {
  const variant = getStatusVariant(status);

  return (
    <span className={cn("status-chip", variant)}>
      {status}
    </span>
  );
}
