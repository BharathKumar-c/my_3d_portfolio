/* eslint-disable react-refresh/only-export-components */
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row justify-center gap-10 flex-wrap">
      {technologies.map((technology) => (
        <div key={technology.name} className="h-28, w-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
