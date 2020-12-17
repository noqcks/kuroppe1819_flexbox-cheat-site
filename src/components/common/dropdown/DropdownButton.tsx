import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { BaseButton, ButtonProps } from '../button/BaseButton';

export type DropdownButtonProps = {
    text: string;
    assistiveText: string;
    icon?: React.ReactNode;
} & Omit<ButtonProps, 'className' | 'title'>;

const Component: React.VFC<DropdownButtonProps & StyledProps> = ({
    className,
    text,
    assistiveText,
    icon,
    disabled,
    onClick,
    ...others
}) => {
    const theme = useTheme();

    return (
        <BaseButton
            className={className}
            title={assistiveText}
            disabled={disabled}
            onClick={onClick}
            aria-label={assistiveText}
            {...others}
        >
            {icon && icon}
            <div className={`${className}__selectedItemText`}>{text}</div>
            <KeyboardArrowDown style={{ fontSize: theme.fontSize['lg'] }} />
        </BaseButton>
    );
};
const StyledComponent: React.VFC<DropdownButtonProps> = styled(Component)`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: ${({ theme }) => theme.color.blue900};
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${({ theme }) => theme.color.gray100};
    }

    &__selectedItemText {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
    }
`;

export const DropdownButton = StyledComponent;
