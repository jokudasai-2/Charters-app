import React from 'react';
import { Input } from '@/components/ui/Input';
import type { FeedbackFilters } from '../types';

interface FeedbackFiltersProps {
  filters: FeedbackFilters;
  onFiltersChange: (filters: FeedbackFilters) => void;
}

export const FeedbackFilters: React.FC<FeedbackFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <Input
          type="search"
          placeholder="Search feedback..."
          value={filters.search || ''}
          onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
        />
      </div>
      <select
        value={filters.type || ''}
        onChange={(e) => onFiltersChange({ ...filters, type: e.target.value })}
        className="h-10 px-3 py-2 text-base rounded border border-neutral-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-teal-500"
      >
        <option value="">All Types</option>
        <option value="general">General</option>
        <option value="technical">Technical</option>
        <option value="business">Business</option>
        <option value="legal">Legal</option>
      </select>
      <select
        value={filters.status || ''}
        onChange={(e) => onFiltersChange({ ...filters, status: e.target.value })}
        className="h-10 px-3 py-2 text-base rounded border border-neutral-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-teal-500"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="heard">Heard</option>
        <option value="actioned">Actioned</option>
      </select>
    </div>
  );
};