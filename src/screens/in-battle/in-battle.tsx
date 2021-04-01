import React from 'react';
import {Container, Content, Form, Accordion} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {inBattleConnector} from './in-battle-connector';
import {AppHeader} from '../../components/app-header';
import {QuantitySelector} from '../../components/quantity-selector';
import {BattleResults} from '../../redux/state/order-of-battle/battle-results';
import {CrusadeCard} from '../../redux/state/order-of-battle/crusade-card';
import {ObjectiveTallies} from '../../redux/state/order-of-battle/crusade-card/objective-tallies';

export type InBattleProps = ConnectedProps<typeof inBattleConnector>

type InBattleState = BattleResults & {
    crusadeCards: Record<string, CrusadeCard>
}

type AccordionProps = {
    title: string,
    content: ObjectiveTallies
}

export class InBattle extends React.Component<InBattleProps, InBattleState> {
    constructor(props: InBattleProps) {
        super(props);

        this.state = {
            ...new BattleResults(),
            crusadeCards: props.crusadeCards
        };
    }

    getCrusadeCardBattleTallies = () : AccordionProps[] => {
        return [];
    }

    render() : React.ReactNode {
        return (
            <Container>
                <AppHeader
                    title={'Battle Details'}
                />
                <Content>
                    <Form>
                        <QuantitySelector
                            title={'Victory Points'}
                            min={0}
                            max={100}
                            multiplier={1}
                            selectedValue={this.state.victoryPoints}
                            onQuantityChange={()=>{}}
                        />
                        <QuantitySelector
                            title={'Opponent Victory Points'}
                            min={0}
                            max={100}
                            multiplier={1}
                            selectedValue={this.state.opponent.victoryPoints}
                            onQuantityChange={()=>{}}
                        />
                    </Form>
                    <Accordion
                        dataArray={this.getCrusadeCardBattleTallies()}
                    />
                </Content>
            </Container>
        );
    }
}
