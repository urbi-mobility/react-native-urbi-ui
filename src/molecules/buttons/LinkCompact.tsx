import React from 'react';
import { Link, LinkProps } from 'src/molecules/buttons/Link';

export const LinkCompactUnmemoized = (props: LinkProps) => <Link {...props} compact />;

export const LinkCompact = React.memo(LinkCompactUnmemoized);
