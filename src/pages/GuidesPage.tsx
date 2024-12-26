import React from 'react';
import { Collapsible } from '@/components/ui/Collapsible';
import { FeedbackGuide } from '@/features/feedback/components/FeedbackGuide';
import { StakeholderGuide } from '@/features/stakeholders/components/StakeholderGuide';
import { CharterGuide } from '@/features/charters/components/CharterGuide';
import { WhyUseCharter } from '@/features/charters/components/CharterGuide/WhyUseCharter';
import { QuickReference } from '@/features/layout/components/InfoDrawer/QuickReference';
import { BestPractices } from '@/features/layout/components/InfoDrawer/BestPractices';
import { CommonWorkflows } from '@/features/layout/components/InfoDrawer/CommonWorkflows';

export const GuidesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-gray-900">Guides & Best Practices</h1>
        <p className="mt-1 text-sm text-neutral-gray-600">
          Learn how to effectively use Charters for project alignment and stakeholder collaboration.
        </p>
      </div>

      <div className="space-y-6">
        <Collapsible title="Quick Reference" defaultOpen>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <QuickReference />
          </div>
        </Collapsible>

        <Collapsible title="Why Use Charters?" defaultOpen>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <WhyUseCharter />
          </div>
        </Collapsible>

        <Collapsible title="Charter Creation">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <CharterGuide />
          </div>
        </Collapsible>

        <Collapsible title="Stakeholder Management">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <StakeholderGuide />
          </div>
        </Collapsible>

        <Collapsible title="Feedback System">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FeedbackGuide />
          </div>
        </Collapsible>

        <Collapsible title="Best Practices">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <BestPractices />
          </div>
        </Collapsible>

        <Collapsible title="Common Workflows">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <CommonWorkflows />
          </div>
        </Collapsible>
      </div>
    </div>
  );
};