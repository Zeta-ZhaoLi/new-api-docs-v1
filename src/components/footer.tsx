import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  lang: string;
}

const footerContent: Record<
  string,
  {
    sections: {
      title: string;
      links: { label: string; href: string; external?: boolean }[];
    }[];
    social: { name: string; href: string; icon: React.ReactNode }[];
    copyright: string;
    beian: { text: string; href?: string; img?: string }[];
    poweredBy: { text: string; link: string; linkText: string };
  }
> = {
  zh: {
    sections: [
      {
        title: '关于我们',
        links: [
          { label: '关于项目', href: '/zh/docs/wiki/project-introduction' },
          { label: '联系我们', href: '/zh/docs/support/community-interaction' },
          { label: '功能特性', href: '/zh/docs/wiki/features-introduction' },
        ],
      },
      {
        title: '文档',
        links: [
          { label: '快速开始', href: '/zh/docs/getting-started' },
          { label: '安装指南', href: '/zh/docs/installation' },
          { label: 'API 文档', href: '/zh/docs/api' },
        ],
      },
      {
        title: '相关项目',
        links: [
          {
            label: 'One API',
            href: 'https://github.com/songquanpeng/one-api',
            external: true,
          },
          {
            label: 'Midjourney-Proxy',
            href: 'https://github.com/novicezk/midjourney-proxy',
            external: true,
          },
          {
            label: 'neko-api-key-tool',
            href: 'https://github.com/Calcium-Ion/neko-api-key-tool',
            external: true,
          },
        ],
      },
      {
        title: '友情链接',
        links: [
          {
            label: 'CoAI',
            href: 'https://github.com/coaidev/coai',
            external: true,
          },
          {
            label: 'new-api-horizon',
            href: 'https://github.com/Calcium-Ion/new-api-horizon',
            external: true,
          },
          {
            label: 'GPT-Load',
            href: 'https://www.gpt-load.com',
            external: true,
          },
          {
            label: 'LangBot',
            href: 'https://langbot.app',
            external: true,
          },
        ],
      },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/QuantumNous/new-api',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        name: 'QQ',
        href: 'https://qm.qq.com/q/Y79glR8raU',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39.421 39.421 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 1.514-2.024 1.514-2.024.045.691.096 1.36.145 1.988.013.119.062.328.11.522.096.401.198.817.469 1.068.217.2.516.369 1.116.465 1.044.167 2.727.235 6.478.235s5.434-.068 6.478-.235c.6-.096.899-.265 1.116-.465.271-.251.373-.667.469-1.068.048-.194.097-.403.11-.522.05-.628.1-1.297.145-1.988 0 0 .974 2.09 1.514 2.024.252-.03.583-1.39-.438-4.673z" />
          </svg>
        ),
      },
    ],
    copyright: '© 2025 锟腾科技（杭州）有限公司 版权所有',
    beian: [
      { text: '浙ICP备2023025841号', href: 'https://beian.miit.gov.cn/' },
      {
        text: '浙公网安备33010502011812号',
        href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502011812',
      },
    ],
    poweredBy: {
      text: 'Made with',
      link: 'https://github.com/QuantumNous/new-api',
      linkText: 'QuantumNous',
    },
  },
  en: {
    sections: [
      {
        title: 'About Us',
        links: [
          {
            label: 'About Project',
            href: '/en/docs/wiki/project-introduction',
          },
          {
            label: 'Contact Us',
            href: '/en/docs/support/community-interaction',
          },
          { label: 'Features', href: '/en/docs/wiki/features-introduction' },
        ],
      },
      {
        title: 'Docs',
        links: [
          { label: 'Quick Start', href: '/en/docs/getting-started' },
          { label: 'Installation Guide', href: '/en/docs/installation' },
          { label: 'API Docs', href: '/en/docs/api' },
        ],
      },
      {
        title: 'Related Projects',
        links: [
          {
            label: 'One API',
            href: 'https://github.com/songquanpeng/one-api',
            external: true,
          },
          {
            label: 'Midjourney-Proxy',
            href: 'https://github.com/novicezk/midjourney-proxy',
            external: true,
          },
          {
            label: 'neko-api-key-tool',
            href: 'https://github.com/Calcium-Ion/neko-api-key-tool',
            external: true,
          },
        ],
      },
      {
        title: 'Friendship Links',
        links: [
          {
            label: 'CoAI',
            href: 'https://github.com/coaidev/coai',
            external: true,
          },
          {
            label: 'new-api-horizon',
            href: 'https://github.com/Calcium-Ion/new-api-horizon',
            external: true,
          },
          {
            label: 'GPT-Load',
            href: 'https://www.gpt-load.com',
            external: true,
          },
          {
            label: 'LangBot',
            href: 'https://langbot.app',
            external: true,
          },
        ],
      },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/QuantumNous/new-api',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        name: 'QQ',
        href: 'https://qm.qq.com/q/Y79glR8raU',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39.421 39.421 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 1.514-2.024 1.514-2.024.045.691.096 1.36.145 1.988.013.119.062.328.11.522.096.401.198.817.469 1.068.217.2.516.369 1.116.465 1.044.167 2.727.235 6.478.235s5.434-.068 6.478-.235c.6-.096.899-.265 1.116-.465.271-.251.373-.667.469-1.068.048-.194.097-.403.11-.522.05-.628.1-1.297.145-1.988 0 0 .974 2.09 1.514 2.024.252-.03.583-1.39-.438-4.673z" />
          </svg>
        ),
      },
    ],
    copyright: '© 2025 QuantumNous. All Rights Reserved.',
    beian: [
      { text: '浙ICP备2023025841号', href: 'https://beian.miit.gov.cn/' },
      {
        text: '浙公网安备33010502011812号',
        href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502011812',
      },
    ],
    poweredBy: {
      text: 'Made with',
      link: 'https://github.com/QuantumNous/new-api',
      linkText: 'QuantumNous',
    },
  },
  ja: {
    sections: [
      {
        title: '私たちについて',
        links: [
          {
            label: 'プロジェクトについて',
            href: '/ja/docs/wiki/project-introduction',
          },
          {
            label: 'お問い合わせ',
            href: '/ja/docs/support/community-interaction',
          },
          { label: '機能', href: '/ja/docs/wiki/features-introduction' },
        ],
      },
      {
        title: 'ドキュメント',
        links: [
          { label: 'クイックスタート', href: '/ja/docs/getting-started' },
          { label: 'インストールガイド', href: '/ja/docs/installation' },
          { label: 'APIドキュメント', href: '/ja/docs/api' },
        ],
      },
      {
        title: '関連プロジェクト',
        links: [
          {
            label: 'One API',
            href: 'https://github.com/songquanpeng/one-api',
            external: true,
          },
          {
            label: 'Midjourney-Proxy',
            href: 'https://github.com/novicezk/midjourney-proxy',
            external: true,
          },
          {
            label: 'neko-api-key-tool',
            href: 'https://github.com/Calcium-Ion/neko-api-key-tool',
            external: true,
          },
        ],
      },
      {
        title: '友好リンク',
        links: [
          {
            label: 'CoAI',
            href: 'https://github.com/coaidev/coai',
            external: true,
          },
          {
            label: 'new-api-horizon',
            href: 'https://github.com/Calcium-Ion/new-api-horizon',
            external: true,
          },
          {
            label: 'GPT-Load',
            href: 'https://www.gpt-load.com',
            external: true,
          },
          {
            label: 'LangBot',
            href: 'https://langbot.app',
            external: true,
          },
        ],
      },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/QuantumNous/new-api',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        name: 'QQ',
        href: 'https://qm.qq.com/q/Y79glR8raU',
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39.421 39.421 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 1.514-2.024 1.514-2.024.045.691.096 1.36.145 1.988.013.119.062.328.11.522.096.401.198.817.469 1.068.217.2.516.369 1.116.465 1.044.167 2.727.235 6.478.235s5.434-.068 6.478-.235c.6-.096.899-.265 1.116-.465.271-.251.373-.667.469-1.068.048-.194.097-.403.11-.522.05-.628.1-1.297.145-1.988 0 0 .974 2.09 1.514 2.024.252-.03.583-1.39-.438-4.673z" />
          </svg>
        ),
      },
    ],
    copyright: '© 2025 QuantumNous. All Rights Reserved.',
    beian: [
      { text: '浙ICP备2023025841号', href: 'https://beian.miit.gov.cn/' },
      {
        text: '浙公網安備33010502011812号',
        href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502011812',
      },
    ],
    poweredBy: {
      text: 'Made with',
      link: 'https://github.com/QuantumNous/new-api',
      linkText: 'QuantumNous',
    },
  },
};

export function Footer({ lang }: FooterProps) {
  const content = footerContent[lang] || footerContent.en;

  return (
    <footer className="mt-auto backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left side: Logo, Social, Copyright */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="New API"
                width={32}
                height={32}
                className="size-8"
              />
              New API
            </Link>

            {/* Social Icons */}
            <div className="flex gap-3">
              {content.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright and Beian */}
            <div className="text-fd-muted-foreground space-y-1 text-xs">
              <p>{content.copyright}</p>
              {content.beian.map((item, index) => (
                <p key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fd-foreground transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Right side: Links Grid */}
          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-fd-foreground mb-3 text-sm font-semibold">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
