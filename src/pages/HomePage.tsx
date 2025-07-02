import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to EdTech UI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your educational technology platform is ready!
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Try navigating to /login, /home, or any other route to see the 404 page in action.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">For Students</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Interactive learning modules</li>
                  <li>• Progress tracking</li>
                  <li>• Assignment submissions</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">For Teachers</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Course management</li>
                  <li>• Student analytics</li>
                  <li>• Content creation tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 