import React, { useState } from 'react';
import { Tab } from './Tab';
import { CharterList } from '../CharterList';
import type { CharterSummary } from '../../types';

interface CharterTabsProps {
  charters: CharterSummary[];
  isLoading: boolean;
}

export const CharterTabs: React.FC<CharterTabsProps> = ({ charters, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'owned' | 'involved'>('owned');
  
  const ownedCharters = charters.filter(charter => charter.isOwner);
  const involvedCharters = charters.filter(charter => !charter.isOwner);

  return (
    <div className="space-y-4">
      <div className="border-b border-neutral-gray-200">
        <div className="flex space-x-8">
          <Tab
            isActive={activeTab === 'owned'}
            onClick={() => setActiveTab('owned')}
            count={ownedCharters.length}
          >
            Charters You Own
          </Tab>
          <Tab
            isActive={activeTab === 'involved'}
            onClick={() => setActiveTab('involved')}
            count={involvedCharters.length}
          >
            Charters You're Involved In
          </Tab>
        </div>
      </div>

      <CharterList
        charters={activeTab === 'owned' ? ownedCharters : involvedCharters}
        isLoading={isLoading}
        type={activeTab}
      />
    </div>
  );
};