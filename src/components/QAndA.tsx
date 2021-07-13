import React, { VFC } from "react";
import Image from "components/parts/Image";
import { QAndA as TQAndA } from "models/qAndA";
import SpeechBubble from "components/parts/SpeechBubble";
import Highlighter from "react-highlight-words";
import ZoomInWhenVisible from "./parts/ZoomInWhenVisible";

type Props = TQAndA & {
  index?: number;
  names: string[];
  profileImage: string;
};

const QAndA: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col space-y-3">
      {/* ↓ Question */}
      <div className="mr-14">
        <SpeechBubble>
          {props.index && <span className="text-primary">{`Q${props.index}. `}</span>}
          {props.question}
        </SpeechBubble>
      </div>

      {/* ↓ Answer */}
      <div className="flex justify-end space-x-3">
        <div className="min-w-0 flex flex-col space-y-3">
          {props.answers.map((answer, i) => (
            <ZoomInWhenVisible key={i.toString()} className="flex justify-end">
              <SpeechBubble outline="primary" reversed>
                <Highlighter
                  highlightClassName="highlight"
                  searchWords={answer.highlight || []}
                  autoEscape={true}
                  caseSensitive={true}
                  textToHighlight={answer.content}
                />
              </SpeechBubble>
            </ZoomInWhenVisible>
          ))}
        </div>
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative w-12 h-12 bg-gray rounded-md overflow-hidden">
            <Image src={props.profileImage} alt="回答者" layout="fill" className="object-cover" />
          </div>
          <div className="pt-1 flex flex-col items-center space-y-1">
            {props.names.map((name, i) => (
              <p key={i.toString()} className="text-black font-medium text-xxs leading-none">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAndA;
