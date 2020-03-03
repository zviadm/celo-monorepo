import json
import dateutil.parser


def duplicate_tx(earned, timestamp, last_earned, last_timestamp):
    if round(earned, 8) == round(last_earned, 8):
        current = dateutil.parser.parse(timestamp)
        old = dateutil.parser.parse(last_timestamp)
        time_diff = current - old
        if time_diff.seconds < 200:
            return True
    return False


with open('celo-org-mobile-pilot-participants-export.json') as json_file:
    data = json.load(json_file)
    total_overpaid = 0
    total_pay = 0
    total_exploits = 0
    total_participants = 0
    total_conversions = 0
    for (participant, value) in data.items():
        overpaid = 0
        pay = 0
        exploited = 0
        conversion_sum = 0
        invalid_cashouts = []
        if 'cashOutTxs' in value.keys():
            address = value['account']

            # Check each cashout tx
            last_earned = None
            last_timestamp = None
            cashouts = list(value['cashOutTxs'].values())
            sorted_cashouts = sorted(
                cashouts, key=lambda x: x['timestamp'], reverse=False)

            for cashout in sorted_cashouts:
                earned = cashout['amountEarned']
                timestamp = cashout['timestamp']

                # Check for duplicate
                if last_earned and duplicate_tx(earned, timestamp, last_earned, last_timestamp):
                    overpaid += earned
                    exploited = 1
                    invalid_cashouts.append(round(earned, 8))
                else:
                    last_earned = earned
                    last_timestamp = timestamp
                    pay += earned

            conversions = list(value['conversions'].values())
            for conversion in conversions:
                conversion_sum += conversion['adjAmount']

            overpay = pay + overpaid + value['earned'] - conversion_sum
            # print('Overpaid by ', overpay)
            overpay_rounded = round(overpay, 8)
            cashouts_rounded = round(sum(invalid_cashouts), 8)
            if overpay_rounded != 0 or cashouts_rounded != 0:
                print(invalid_cashouts)
                # print(participant+',' + address+',' +
                #      str(overpay_rounded), str(cashouts_rounded), invalid_cashouts)
        total_overpaid += overpaid
        total_pay += pay
        total_exploits += exploited
        total_participants += 1
        total_conversions += conversion_sum

    print('Total overpaid:' + str(total_overpaid))
    print('Total pay:' + str(total_pay))
    print('Total exploits:' + str(total_exploits))
    print('Total participants:' + str(total_participants))
    print('Total conversions:' + str(total_conversions))
