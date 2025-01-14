import { Event, Response, Status, Transport } from '@sentry/types';
import { SyncPromise } from '@sentry/utils';

/** Noop transport */
export class NoopTransport implements Transport {
  /**
   * @inheritDoc
   */
  public sendEvent(_: Event): Promise<Response> {
    return SyncPromise.resolve({
      reason: `NoopTransport: Event has been skipped because no Dsn is configured.`,
      status: Status.Skipped,
    });
  }

  /**
   * @inheritDoc
   */
  public close(_?: number): Promise<boolean> {
    return SyncPromise.resolve(true);
  }
}
