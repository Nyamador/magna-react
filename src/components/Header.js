import React from 'react';
import {
	Header,
	HeaderName,
	HeaderNavigation,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const Header = () => {
	return (
		<div>
			<Header aria-label='Home'>
				<SkipToContent />
				<HeaderName href='/' prefix='Magna'>
					Dashboard
				</HeaderName>

				<HeaderNavigation aria-label='c'>
					<HeaderMenuItem href='/repos'></HeaderMenuItem>
				</HeaderNavigation>
				<HeaderGlobalBar>
					<HeaderGlobalAction aria-label='Notifications'>
						<Notification20 />
					</HeaderGlobalAction>
					<HeaderGlobalAction aria-label='User Avatar'>
						<UserAvatar20 />
					</HeaderGlobalAction>
					<HeaderGlobalAction aria-label='App Switcher'>
						<AppSwitcher20 />
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header>
		</div>
	);
};

export default Header;

