import { Link } from 'react-router-dom';

interface EmptyNoticeProps {
  title?: string;
  className?: string;
}

/**
 * Shown when a category has no published pages yet. Points residents to the
 * official channels instead of leaving an empty list.
 */
export default function EmptyNotice({
  title = 'Guides for this section are being prepared',
  className = '',
}: EmptyNoticeProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-gray-50 p-6 ${className}`}
    >
      <p className="font-bold text-gray-900 mb-1">{title}</p>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        We only publish information that has been checked against Tanza's
        official sources. In the meantime, you can reach the municipality
        through these channels:
      </p>
      <ul className="text-sm space-y-1.5 mb-4">
        <li>
          <a
            href="https://www.tanza.gov.ph"
            target="_blank"
            rel="noreferrer"
            className="text-primary-700 font-semibold underline underline-offset-2"
          >
            Official Tanza website
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ph.MunicipalityofTanza"
            target="_blank"
            rel="noreferrer"
            className="text-primary-700 font-semibold underline underline-offset-2"
          >
            Municipality of Tanza on Facebook
          </a>
        </li>
        <li>
          <a
            href="https://tanzapublicservice.site"
            target="_blank"
            rel="noreferrer"
            className="text-primary-700 font-semibold underline underline-offset-2"
          >
            Tanza Public Service System (online requests)
          </a>
        </li>
      </ul>
      <Link
        to="/"
        className="text-sm font-semibold text-gray-700 underline underline-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
}
