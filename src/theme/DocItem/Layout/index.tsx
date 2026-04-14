import React, { useEffect, useState } from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import { QRCodeSVG } from 'qrcode.react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Determine the full URL for the QR code
    const url = typeof window !== 'undefined' 
      ? window.location.href 
      : `${siteConfig.url}${siteConfig.baseUrl}${location.pathname.replace(/^\//, '')}`;
    setCurrentUrl(url);
  }, [location, siteConfig]);

  return (
    <>
      {currentUrl && (
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0.5rem',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '8px',
          marginBottom: '1rem',
        }} className="qr-code-section">
          <div style={{ marginRight: '1rem', textAlign: 'right' }}>
            <p style={{ marginBottom: '0', fontSize: '0.7rem', fontWeight: 'bold' }}>VERSÃO ATUALIZADA</p>
            <p style={{ marginBottom: '0', fontSize: '0.6rem', color: 'var(--ifm-color-emphasis-700)' }}>
              {currentUrl}
            </p>
          </div>
          <QRCodeSVG value={currentUrl} size={64} />
        </div>
      )}
      <Layout {...props} />
    </>
  );
}
