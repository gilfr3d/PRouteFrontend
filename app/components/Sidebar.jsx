"use client"
import { forwardRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  MapIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Sidebar = forwardRef(({ currentPath }, ref) => {
  const [isTerritoriesDropdownOpen, setTerritoriesDropdownOpen] =
    useState(false);
  const [isVehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);
  const [isRouteManagementDropdownOpen, setRouteManagementDropdownOpen] =
    useState(false);
  const [isDeliveryManagementDropdownOpen, setDeliveryManagementDropdownOpen] =
    useState(false);

  const handleToggleTerritoriesDropdown = () => {
    setTerritoriesDropdownOpen(!isTerritoriesDropdownOpen);
  };
  const handleToggleVehicleDropdown = () => {
    setVehicleDropdownOpen(!isVehicleDropdownOpen);
    setTerritoriesDropdownOpen(false); // Close the territories dropdown
  };
  const handleToggleRouteManagementDropdown = () => {
    setRouteManagementDropdownOpen(!isRouteManagementDropdownOpen);
  };
  const handleToggleDeliveryManagementDropdown = () => {
    setDeliveryManagementDropdownOpen(!isDeliveryManagementDropdownOpen);
  };

  const territoriesSubMenu = [
    'Plan Territories',
    'Route Territories',
    'Orders by Territory',
  ];
  const territoriesSubMenu2 = [
    'Add Vehicle',
    'Update Vehicle',
    'Remove Vehicle',
  ];
  const routeManagement = ['Current Routes', 'View Routes', 'Add Routes'];
  const deliveryManagement = [
    'List of Orders',
    'Manual Order Creation',
    'Load & Unload Orders',
  ];

  return (
    <div ref={ref} className="fixed w-56 h-full bg-slate-200 shadow-sm">
      <div className="flex justify-center mt-2">
        <picture>
          <img
            className="w-32 h-auto"
            src="/nartec-logo.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div>
        <Link href="/dashboard">
          <div
            className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
              currentPath === '/'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-1">
              <HomeModernIcon className="h-5 w-5 mb-2 text-customBlue" />
            </div>
            <div>
              <p className="text-customBlue mb-2 text-base">Dashboard</p>
            </div>
          </div>
        </Link>

        <div
          className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
            currentPath === '/dashboard'
              ? 'bg-orange-100 text-orange-500'
              : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
          }`}
        >
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleToggleTerritoriesDropdown}
            >
              <BuildingOffice2Icon className="h-5 w-5 mb-2 text-customBlue" />

              <p className="text-customBlue ml-1 mb-2 text-base">
                Manage Territories
              </p>
              {isTerritoriesDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 text-customBlue ml-4 mb-2 text-6xl" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-customBlue ml-4 mb-2 text-6xl" />
              )}
            </div>
            {isTerritoriesDropdownOpen && (
              <div className="">
                {territoriesSubMenu.map((item) => (
                  <Link
                    key={item}
                    href={`/territories/${item
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    <p className="text-customBlue mb-2 text-base cursor-pointer text-left pl-6">
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <Link href="/geo">
          <div
            className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
              currentPath === '/dashboard'
                ? 'bg-orange-100 text-orange-500'
                : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
            }`}
          >
            <div className="mr-1">
              <MapIcon className="h-5 w-5 mb-2 text-customBlue" />
            </div>
            <div>
              <p className="text-customBlue mb-2 text-base">Geofencing</p>
            </div>
          </div>
        </Link> */}
        <div
          className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
            currentPath === '/dashboard'
              ? 'bg-orange-100 text-orange-500'
              : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
          }`}
        >
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleToggleVehicleDropdown}
            >
              <TruckIcon className="h-5 w-5 mb-2 text-customBlue" />

              <p className="text-customBlue ml-1 mb-2 text-base">
                Manage Vehicle
              </p>
              {isVehicleDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 text-customBlue ml-10 mb-2 text-6xl" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-customBlue ml-10 mb-2 text-6xl" />
              )}
            </div>
            {isVehicleDropdownOpen && (
              <div className="">
                {territoriesSubMenu2.map((item) => (
                  <Link
                    key={item}
                    href={`/territories/${item
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    <p className="text-customBlue mb-2 text-base cursor-pointer text-left pl-6">
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
            currentPath === 'dashboard'
              ? 'bg-orange-100 text-orange-500'
              : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
          }`}
        >
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleToggleRouteManagementDropdown}
            >
              <TruckIcon className="h-5 w-5 mb-2 text-customBlue" />

              <p className="text-customBlue ml-1 mb-2 text-base">
                Route Management
              </p>
              {isRouteManagementDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 text-customBlue ml-3 mb-2 text-6xl" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-customBlue ml-3 mb-2 text-6xl" />
              )}
            </div>
            {isRouteManagementDropdownOpen && (
              <div className="">
                {routeManagement.map((item) => (
                  <Link
                    key={item}
                    href="/dashboard/[...slug]"
                    as={`/dashboard/routes/${item.toLowerCase().replace(' ', '-')}`}
                  >
                    <p className="text-customBlue mb-2 text-base cursor-pointer text-left pl-6">
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={`m-1 pl-2 rounded text-center bg-slate-200 pt-2 cursor-pointer flex items-center transition-colors ${
            currentPath === '/dashboard'
              ? 'bg-orange-100 text-orange-500'
              : 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
          }`}
        >
          <div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleToggleDeliveryManagementDropdown}
            >
              <TruckIcon className="h-5 w-5 mb-2 text-customBlue" />

              <p className="text-customBlue ml-1 mb-2 text-base">
                Delivery Mngt
              </p>
              {isDeliveryManagementDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 text-customBlue ml-10 mb-2 text-6xl" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-customBlue ml-10 mb-2 text-6xl" />
              )}
            </div>
            {isDeliveryManagementDropdownOpen && (
              <div className="">
                {deliveryManagement.map((item) => (
                  <Link
                    key={item}
                    href={`/territories/${item
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    <p className="text-customBlue mb-2 text-base cursor-pointer text-left pl-6">
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
