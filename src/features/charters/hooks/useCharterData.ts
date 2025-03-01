import { useState, useEffect } from 'react';
import { useCharters } from './useCharters';
import { useCharterStats } from './useCharterStats';

export const useCharterData = () => {
  const { charters, isLoading: isLoadingCharters } = useCharters();
  const { stats, isLoading: isLoadingStats } = useCharterStats();

  return {
    charters,
    stats,
    isLoadingCharters,
    isLoadingStats
  };
};