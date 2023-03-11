import React from "react";
import Link from "next/link";
import Text from "common/components/Text";
import CopyrightWrapper from "./copyright.style";

import { socialProfile } from "common/data/Interior";

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {socialProfile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href={profile.link}>
              <a>
                <i className={profile.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Text content="Copyright 2023 PT. SURYA CHANDRA ENGINEERING" />
    </CopyrightWrapper>
  );
};

export default Copyright;
