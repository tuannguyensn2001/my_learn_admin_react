import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from 'src/hooks/useAppContext.js';

function SubHeader() {
  const { appState } = useAppContext();

  return (
    <div className="bg-white rounded box-shadow">
      <div className="px-14 py-5 flex ">
        <div className="h-full">
          <h1 className="font-medium text-md">{appState?.subheader?.title}</h1>
        </div>
        <div className="flex ml-5 h-full justify-center flex-col">
          <ul className="list-reset h-full rounded flex bg-grey-light text-gray-300">
            {appState?.subheader?.breadcrumbs?.map((item) => (
              <li className="px-2" key={item.pathname}>
                <Link
                  to={item?.pathname}
                  className="no-underline text-indigo hover:text-gray-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
