import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
    //위의 props를 바로 ({ name, children }) 으로 변경 가능
    const { name, favoriteNumber, children } = props;
    return (
    <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
    //isRequired를 이용하면 해당 props을 정해주지 않으면 경고를 띄움
};

export default MyComponent;