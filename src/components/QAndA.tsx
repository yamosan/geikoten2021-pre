import React, { VFC } from "react";
import Image from "next/image";
import { QAndA as TQAndA } from "models/qAndA";
import SpeechBubble from "components/parts/SpeechBubble";
import Highlighter from "react-highlight-words";

type Props = TQAndA & {
  index?: number;
};

const QAndA: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <SpeechBubble>
        {props.index && <span className="text-primary">{`Q${props.index}. `}</span>}
        {props.question}
      </SpeechBubble>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex flex-col gap-3">
          {props.answers.map((answer, i) => (
            <SpeechBubble outline="primary" reversed key={i.toString()}>
              <Highlighter
                highlightClassName="highlight"
                searchWords={answer.highlight || []}
                autoEscape={true}
                caseSensitive={true}
                textToHighlight={answer.content}
              />
            </SpeechBubble>
          ))}
        </div>
        <div className="relative w-12 h-12 flex-shrink-0 bg-gray rounded-md overflow-hidden">
          <Image src="/img/400x250.png" alt="回答者" layout="fill" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default QAndA;
