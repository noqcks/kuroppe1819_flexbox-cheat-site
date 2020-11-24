import React from 'react';
import styled from 'styled-components';
import { TextLink, TEXT_LINK_VARIANT } from '../components/common/link/TextLink';
import { PageRoot } from '../components/root/PageRoot';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;
    return (
        <PageRoot>
            <main className={`${className}`}>
                <h2>利用規約</h2>
                <p>
                    この利用規約（以下，「本規約」といいます。）は，Flexbox Cheat
                    Site（以下，「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                </p>
                <h3>第1条（適用）</h3>
                <ol>
                    <li>本規約は，ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                    <li>
                        本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                    </li>
                    <li>
                        本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                    </li>
                </ol>

                <h3>第2条（禁止事項）</h3>
                <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>

                <ol>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                    <li>
                        本サービス，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
                    </li>
                    <li>本サービスによって得られた情報を商業的に利用する行為</li>
                    <li>本サービスの運営を妨害するおそれのある行為</li>
                    <li>不正アクセスをし，またはこれを試みる行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正な目的を持って本サービスを利用する行為</li>
                    <li>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li>
                    <li>他のユーザーに成りすます行為</li>
                    <li>本サービスが許諾しないサービス上での宣伝，広告，勧誘，または営業行為</li>
                    <li>面識のない異性との出会いを目的とした行為</li>
                    <li>本サービスのサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
                    <li>その他，本サービスが不適切と判断する行為</li>
                </ol>

                <h3>第3条（本サービスの提供の停止等）</h3>
                <ol>
                    <li>
                        本サービスは，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        <ol>
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>
                                地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
                            </li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他，本サービスがサービスの提供が困難と判断した場合</li>
                        </ol>
                    </li>
                    <li>
                        本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
                    </li>
                </ol>
                <h3>第4条（著作権等知的財産権)</h3>
                <ol>
                    <li>本サービス内の文章、写真その他の知的財産権は本サービスに帰属します。</li>
                    <li>
                        ユーザーは本サイトのソースコードを無断で使用することを認めます。
                        ただし、類似サービス等に転載する場合に限り、運営者に承諾を要求するものとします。
                    </li>
                </ol>

                <h3>第5条（利用制限および登録抹消）</h3>
                <ol>
                    <li>
                        本サービスは，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限できるものとします。
                        <ol>
                            <li>本規約のいずれかの条項に違反した場合</li>
                            <li>その他，本サービス運営者が本サービスの利用を適当でないと判断した場合</li>
                        </ol>
                    </li>
                    <li>
                        本サービスは，本条に基づき本サービスが行った行為によりユーザーに生じた損害について，一切の責任を負いません。
                    </li>
                </ol>

                <h3>第6条（保証の否認および免責事項）</h3>
                <ol>
                    <li>
                        本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                    </li>
                    <li>
                        本サービスは，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関するユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
                    </li>
                    <li>
                        前項ただし書に定める場合であっても，本サービスは，本サービスの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（本サービス運営者またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，本サービスの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
                    </li>
                    <li>
                        本サービスは，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
                    </li>
                </ol>

                <h3>第7条（サービス内容の変更等）</h3>
                <p>
                    本サービスは，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
                </p>

                <h3>第8条（利用規約の変更）</h3>
                <p>
                    本サービス運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
                </p>

                <h3>第9条（個人情報の取扱い）</h3>
                <p>
                    本サービス運営者は，本サービスの利用によって取得する個人情報については，本サービス「プライバシーポリシー」に従い適切に取り扱うものとします。
                </p>

                <h3>第10条（権利義務の譲渡の禁止）</h3>
                <p>
                    ユーザーは，本サービスの書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
                </p>

                <h3>第11条（準拠法・裁判管轄）</h3>
                <ol>
                    <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                    <li>
                        本サービスに関して紛争が生じた場合には，本サービスの本店所在地を管轄する裁判所を専属的合意管轄とします。
                    </li>
                </ol>

                <h3>第12条 GNU General Public License (GNU) 3.0に遵守すること</h3>
                <p>
                    本サービスは
                    <a
                        href="https://github.com/kuroppe1819/flexbox-cheat-site/blob/master/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GNU General Public License (GNU) 3.0
                    </a>
                    に基づき、これを遵守するものとします。
                </p>
                <p>（2020年5月24日 制定）</p>
                <div className={`${className}__backToTopLink`}>
                    <TextLink text={'トップへ戻る'} url={process.env.ROOT_PATH} variant={TEXT_LINK_VARIANT.SQUARE} />
                </div>
            </main>
        </PageRoot>
    );
};

const StyledComponent: React.FC = styled(Component)`
    max-width: 37.5rem;
    margin: 4rem auto;
    padding: 0 2.5rem;

    &__backToTopLink {
        margin: 4rem 0;
        text-align: center;
    }
`;

export const Terms = StyledComponent;
