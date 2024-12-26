import React, { useState } from 'react';
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';
import { useUser } from '@/features/auth/hooks/useUser';

export const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { email, isLoading } = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/signin');
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-3">
        {!isLoading && email && (
          <span className="text-sm text-neutral-gray-600">{email}</span>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center text-neutral-gray-600 hover:text-neutral-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <User className="h-5 w-5" />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-4 py-2 text-sm text-neutral-gray-700 hover:bg-neutral-gray-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};