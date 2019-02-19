import React, { memo } from 'react';

/**
 * @returns {JSX} JSX element
 */
function AppFooterComponent() {
	return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted-footer"> NY Times App  &copy; 2019</span>
      </div>
    </footer>
	)
}

export const AppFooter = memo(AppFooterComponent);
